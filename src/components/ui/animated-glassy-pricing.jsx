import React, { useRef, useEffect, useState } from 'react';
import { RippleButton } from "./multi-type-ripple-buttons";

const CheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ShaderCanvas = () => {
  const canvasRef = useRef(null);
  const glProgramRef = useRef(null);
  const glBgColorLocationRef = useRef(null);
  const glRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState([0.043, 0.063, 0.125]); // default vyra-black roughly

  useEffect(() => {
    // Hardcoded to dark mode context for Vyra brand
    setBackgroundColor([0.043, 0.063, 0.125]); 
  }, []);

  useEffect(() => {
    const gl = glRef.current;
    const program = glProgramRef.current;
    const location = glBgColorLocationRef.current;
    if (gl && program && location) {
      gl.useProgram(program);
      gl.uniform3fv(location, new Float32Array(backgroundColor));
    }
  }, [backgroundColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl;
    try {
      gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch {
      return;
    }
    
    if (!gl) return;

    glRef.current = gl;

    try {
      const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        uv.x *= 1.5; uv.x -= 0.25;
        float mask = 0.0;
        float radius = .35;
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 foregroundColor=vec3(v.x,v.y,.7-v.y*v.x);
        vec3 color=mix(uBackgroundColor,foregroundColor,mask);
        color=mix(color,vec3(1.),paintCircle(uv,center,radius,.003).r);
        gl_FragColor=vec4(color,1.);
      }`;

    const compileShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Could not create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation error");
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) throw new Error("Could not create program");
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    glProgramRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, 'iTime');
    const iResLoc = gl.getUniformLocation(program, 'iResolution');
    glBgColorLocationRef.current = gl.getUniformLocation(program, 'uBackgroundColor');
    gl.uniform3fv(glBgColorLocationRef.current, new Float32Array(backgroundColor));

    let animationFrameId;
    const render = (time) => {
      gl.uniform1f(iTimeLoc, time * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
    } catch {
      // Silently fail on WebGL issues; gracefully fallback to CSS backgrounds
      return;
    }
  }, [backgroundColor]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full block z-0 opacity-20 pointer-events-none" />;
};


export const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, buttonVariant = 'primary'
}) => {
  const cardClasses = `
    backdrop-blur-xl bg-[#0f1423]/60 rounded-[2rem] shadow-2xl flex-1 max-w-[340px] px-8 py-10 flex flex-col transition-all duration-300
    border border-white/10
    ${isPopular ? 'scale-105 relative ring-1 ring-vyra-violet/40 shadow-vyra-violet/20 z-10' : 'hover:border-white/20 z-0'}
  `;
  const buttonClasses = `
    mt-8 w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all
    ${buttonVariant === 'primary' 
      ? 'bg-vyra-violet hover:bg-vyra-violet/90 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]' 
      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
    }
  `;

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className="absolute -top-4 rounded-full inset-x-0 mx-auto w-fit px-4 py-1 text-[12px] font-bold tracking-widest uppercase bg-vyra-violet text-white shadow-lg">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-[32px] font-bold tracking-tight text-white">{planName}</h2>
        <p className="text-[15px] text-gray-400 mt-2 leading-relaxed">{description}</p>
      </div>
      
      <div className="mb-6 flex items-baseline gap-2">
        <span className="text-[54px] font-bold tracking-tighter text-white">{price}</span>
      </div>
      
      <div className="w-full mb-8 h-px bg-white/10"></div>
      
      <ul className="flex flex-col gap-4 text-[15px] text-gray-300 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 leading-snug">
            <CheckCircle className="text-vyra-violet w-5 h-5 shrink-0 mt-0.5" /> 
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <RippleButton className={buttonClasses.trim()}>{buttonText}</RippleButton>
    </div>
  );
};


const CheckCircle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);


export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="bg-[#0b1020] text-white py-24 w-full relative overflow-visible border-t border-white/5">
      {showAnimatedBackground && <ShaderCanvas />}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-blue/10 blur-[150px] rounded-full point-events-none z-0" />

      <main className="relative z-10 w-full flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-3xl mx-auto text-center mb-20 text-balance">
          {title}
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-stretch w-full max-w-6xl">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </main>
    </div>
  );
};
