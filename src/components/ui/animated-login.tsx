'use client';
import React, { memo, ReactNode, useState, ChangeEvent, FormEvent, useEffect, useRef, forwardRef } from 'react';
import { motion, useAnimation, useInView, useMotionTemplate, useMotionValue } from 'motion/react';
import { Eye, EyeOff, Video, Camera, Target, TrendingUp, Sparkles, Smartphone, Clapperboard, MonitorPlay, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ==================== Input Component ====================

const Input = memo(
  forwardRef(function Input(
    { className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    const radius = 100;
    const [visible, setVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='group/input rounded-lg p-[2px] transition duration-300'
      >
        <input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  })
);

Input.displayName = 'Input';

// ==================== BoxReveal Component ====================

type BoxRevealProps = {
  children: ReactNode;
  width?: string;
  boxColor?: string;
  duration?: number;
  overflow?: string;
  position?: string;
  className?: string;
};

const BoxReveal = memo(function BoxReveal({
  children,
  width = 'fit-content',
  boxColor,
  duration,
  overflow = 'hidden',
  position = 'relative',
  className,
}: BoxRevealProps) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start('visible');
      mainControls.start('visible');
    } else {
      slideControls.start('hidden');
      mainControls.start('hidden');
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <section ref={ref} style={{ position: position as 'relative'|'absolute'|'fixed'|'sticky'|'static', width, overflow }} className={className}>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: duration ?? 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: '100%' } }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: duration ?? 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute', top: 4, bottom: 4, left: 0, right: 0,
          zIndex: 20, background: boxColor ?? '#7C3AED', borderRadius: 4,
        }}
      />
    </section>
  );
});

// ==================== Ripple Component ====================

type RippleProps = {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
};

const Ripple = memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 11,
  className = '',
}: RippleProps) {
  return (
    <section
      className={`max-w-[50%] absolute inset-0 flex items-center justify-center
        dark:bg-white/5 bg-neutral-50
        [mask-image:linear-gradient(to_bottom,black,transparent)]
        dark:[mask-image:linear-gradient(to_bottom,white,transparent)] ${className}`}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? 'dashed' : 'solid';
        const borderOpacity = 5 + i * 5;

        return (
          <span
            key={i}
            className='absolute animate-ripple rounded-full bg-foreground/15 border'
            style={{
              width: `${size}px`, height: `${size}px`, opacity: opacity,
              animationDelay: animationDelay, borderStyle: borderStyle,
              borderWidth: '1px',
              borderColor: `rgba(124, 58, 237, ${borderOpacity / 100})`, // vyra-violet tint
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}
    </section>
  );
});

// ==================== OrbitingCircles Component ====================

type OrbitingCirclesProps = {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
};

const OrbitingCircles = memo(function OrbitingCircles({
  className, children, reverse = false, duration = 20, delay = 10, radius = 50, path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg xmlns='http://www.w3.org/2000/svg' version='1.1' className='pointer-events-none absolute inset-0 size-full'>
          <circle className='stroke-black/10 stroke-1 dark:stroke-white/10' cx='50%' cy='50%' r={radius} fill='none' />
        </svg>
      )}
      <section
        style={{ '--duration': duration, '--radius': radius, '--delay': -delay } as React.CSSProperties}
        className={cn(
          'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:calc(var(--delay)*1000ms)] dark:bg-white/10',
          { '[animation-direction:reverse]': reverse },
          className
        )}
      >
        {children}
      </section>
    </>
  );
});

// ==================== TechOrbitDisplay Component ====================

type IconConfig = {
  className?: string; duration?: number; delay?: number; radius?: number;
  path?: boolean; reverse?: boolean; component: () => React.ReactNode;
};

type TechnologyOrbitDisplayProps = { iconsArray: IconConfig[]; text?: string; };

const TechOrbitDisplay = memo(function TechOrbitDisplay({ iconsArray, text = 'Vyra Workspace' }: TechnologyOrbitDisplayProps) {
  return (
    <section className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg'>
      <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-vyra-violet to-glow-cyan bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 drop-shadow-xl z-20'>
        {text}
      </span>

      {iconsArray.map((icon, index) => (
        <OrbitingCircles key={index} className={icon.className} duration={icon.duration} delay={icon.delay} radius={icon.radius} path={icon.path} reverse={icon.reverse}>
          {icon.component()}
        </OrbitingCircles>
      ))}
    </section>
  );
});

// ==================== AnimatedForm Component ====================

type FieldType = 'text' | 'email' | 'password';
type Field = { label: string; required?: boolean; type: FieldType; placeholder?: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; };
type AnimatedFormProps = { header: string; subHeader?: string; fields: Field[]; submitButton: string; textVariantButton?: string; errorField?: string; fieldPerRow?: number; onSubmit: (event: FormEvent<HTMLFormElement>) => void; googleLogin?: string; goTo?: (event: React.MouseEvent<HTMLButtonElement>) => void; };
type Errors = { [key: string]: string; };

const AnimatedForm = memo(function AnimatedForm({ header, subHeader, fields, submitButton, textVariantButton, errorField, fieldPerRow = 1, onSubmit, googleLogin, goTo }: AnimatedFormProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const toggleVisibility = () => setVisible(!visible);

  const validateForm = (event: FormEvent<HTMLFormElement>) => {
    const currentErrors: Errors = {};
    fields.forEach((field) => {
      const value = (event.target as HTMLFormElement)[field.label]?.value;
      if (field.required && !value) currentErrors[field.label] = `${field.label} is required`;
      if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) currentErrors[field.label] = 'Invalid email address';
      if (field.type === 'password' && value && value.length < 6) currentErrors[field.label] = 'Password must be at least 6 characters long';
    });
    return currentErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm(event);
    if (Object.keys(formErrors).length === 0) {
      onSubmit(event);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className='max-md:w-full flex flex-col gap-4 w-96 mx-auto'>
      <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
        <h2 className='font-bold text-3xl text-neutral-800 dark:text-neutral-200'>{header}</h2>
      </BoxReveal>
      {subHeader && (
        <BoxReveal boxColor='var(--skeleton)' duration={0.3} className='pb-2'>
          <p className='text-neutral-600 text-sm max-w-sm dark:text-neutral-400'>{subHeader}</p>
        </BoxReveal>
      )}

      {googleLogin && (
        <>
          <BoxReveal boxColor='var(--skeleton)' duration={0.3} overflow='visible' width='unset'>
            <button className='g-button group/btn bg-white dark:bg-zinc-900 w-full rounded-md border h-10 font-medium outline-hidden hover:cursor-pointer' type='button'>
              <span className='flex items-center justify-center w-full h-full gap-3 text-sm text-black dark:text-white'>
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
                {googleLogin}
              </span>
              <BottomGradient />
            </button>
          </BoxReveal>
          <BoxReveal boxColor='var(--skeleton)' duration={0.3} width='100%'>
            <section className='flex items-center gap-4'>
              <hr className='flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700' />
              <p className='text-neutral-700 text-xs dark:text-neutral-400'>or</p>
              <hr className='flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700' />
            </section>
          </BoxReveal>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <section className={`grid grid-cols-1 md:grid-cols-${fieldPerRow} mb-4`}>
          {fields.map((field) => (
            <section key={field.label} className='flex flex-col gap-2'>
              <BoxReveal boxColor='var(--skeleton)' duration={0.3}>
                <Label htmlFor={field.label} className="text-black dark:text-white">
                  {field.label} {field.required && <span className='text-vyra-violet'>*</span>}
                </Label>
              </BoxReveal>
              <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3} className='flex flex-col space-y-2 w-full'>
                <section className='relative'>
                  <Input
                    type={field.type === 'password' ? (visible ? 'text' : 'password') : field.type}
                    id={field.label}
                    placeholder={field.placeholder}
                    onChange={field.onChange}
                  />
                  {field.type === 'password' && (
                    <button type='button' onClick={toggleVisibility} className='absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 leading-5'>
                      {visible ? <Eye className='h-5 w-5' /> : <EyeOff className='h-5 w-5' />}
                    </button>
                  )}
                </section>
                <section className='h-4'>
                  {errors[field.label] && <p className='text-red-500 text-xs'>{errors[field.label]}</p>}
                </section>
              </BoxReveal>
            </section>
          ))}
        </section>

        <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3}>
          {errorField && <p className='text-red-500 text-sm mb-4'>{errorField}</p>}
        </BoxReveal>

        <BoxReveal width='100%' boxColor='var(--skeleton)' duration={0.3} overflow='visible'>
          <button className='bg-primary-gradient relative group/btn w-full text-white rounded-md h-10 font-bold shadow-[0px_4px_14px_0px_rgba(34,211,238,0.39)] outline-hidden hover:opacity-90 transition-opacity' type='submit'>
            {submitButton} &rarr;
            <BottomGradient />
          </button>
        </BoxReveal>

        {textVariantButton && goTo && (
          <BoxReveal boxColor='var(--skeleton)' duration={0.3} width="100%">
            <section className='mt-8 text-center'>
              <button type='button' className='text-sm text-glow-cyan hover:underline outline-hidden' onClick={goTo}>
                {textVariantButton}
              </button>
            </section>
          </BoxReveal>
        )}
      </form>
    </section>
  );
});

const BottomGradient = () => (
  <>
    <span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-glow-cyan to-transparent' />
    <span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-vyra-violet to-transparent' />
  </>
);

// ==================== AuthTabs & Labels Component ====================

interface AuthTabsProps { formFields: any; goTo: (event: React.MouseEvent<HTMLButtonElement>) => void; handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void; }
const AuthTabs = memo(function AuthTabs({ formFields, goTo, handleSubmit }: AuthTabsProps) {
  return (
    <div className='flex max-lg:justify-center w-full md:w-auto z-10 p-8 glass-panel dark:glass-panel rounded-2xl'>
      <div className='w-full flex flex-col justify-center items-center'>
        <AnimatedForm {...formFields} fieldPerRow={1} onSubmit={handleSubmit} goTo={goTo} googleLogin='Continue with Google' />
      </div>
    </div>
  );
});

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { htmlFor?: string; }
const Label = memo(function Label({ className, ...props }: LabelProps) {
  return <label className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)} {...props} />;
});

// ==================== Main Default Export Component ====================

const vyraIcons: IconConfig[] = [
  { component: () => <Video className="w-8 h-8 text-glow-cyan" />, className: 'size-[35px] border-none bg-black/40 backdrop-blur shadow-[0_0_15px_rgba(34,211,238,0.3)]', duration: 25, delay: 0, radius: 100, path: false, reverse: false },
  { component: () => <Camera className="w-6 h-6 text-vyra-violet" />, className: 'size-[32px] border-none bg-white/10 backdrop-blur', duration: 25, delay: 10, radius: 100, path: false, reverse: false },
  { component: () => <Smartphone className="w-10 h-10 text-white" />, className: 'size-[55px] border-none flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-vyra-violet p-2 shadow-xl', radius: 180, duration: 30, path: true, reverse: false },
  { component: () => <TrendingUp className="w-8 h-8 text-glow-cyan" />, className: 'size-[45px] border-none bg-black/50 backdrop-blur', radius: 180, duration: 30, delay: 15, path: false, reverse: false },
  { component: () => <Target className="w-7 h-7 text-pink-500" />, className: 'size-[40px] border-none bg-white/10 backdrop-blur', duration: 28, delay: 5, radius: 240, path: true, reverse: true },
  { component: () => <Sparkles className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />, className: 'size-[38px] border-none bg-white/5 backdrop-blur', duration: 28, delay: 18, radius: 240, path: false, reverse: true },
  { component: () => <Clapperboard className="w-9 h-9 text-vyra-violet" />, className: 'size-[48px] border-none bg-black/40 backdrop-blur shadow-[0_0_15px_rgba(124,58,237,0.3)]', radius: 320, duration: 40, delay: 0, path: true, reverse: true },
  { component: () => <MonitorPlay className="w-7 h-7 text-electric-blue" />, className: 'size-[42px] border-none bg-white/10 backdrop-blur', radius: 320, duration: 40, delay: 20, path: false, reverse: true },
  { component: () => <Zap className="w-10 h-10 text-glow-cyan" />, className: 'size-[55px] border-none bg-[#0B1020]/80 shadow-[0_0_20px_rgba(34,211,238,0.5)]', radius: 380, duration: 35, delay: 0, path: true, reverse: false },
];

export const AnimatedLoginPage: React.FC<{ isRegister?: boolean, onSubmit: (email: string, pass: string, remember: boolean) => void }> = ({ isRegister, onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    // `animatedForm` calls preventDefault, so by the time it reaches here it's valid
    onSubmit(formData.email, formData.password, false);
  };

  const toggleTo = isRegister ? '/login' : '/register';
  
  const formFields = {
    header: isRegister ? 'Create Workspace' : 'Welcome back',
    subHeader: isRegister ? 'Set up your creative universe today' : 'Sign in to access your dashboard',
    fields: isRegister ? [
      { label: 'Full Name', required: true, type: 'text' as const, placeholder: 'Enter your name', onChange: (e: any) => handleInputChange(e, 'name') },
      { label: 'Work Email', required: true, type: 'email' as const, placeholder: 'Enter your email address', onChange: (e: any) => handleInputChange(e, 'email') },
      { label: 'Password', required: true, type: 'password' as const, placeholder: 'Create a password', onChange: (e: any) => handleInputChange(e, 'password') },
    ] : [
      { label: 'Email', required: true, type: 'email' as const, placeholder: 'Enter your email address', onChange: (e: any) => handleInputChange(e, 'email') },
      { label: 'Password', required: true, type: 'password' as const, placeholder: 'Enter your password', onChange: (e: any) => handleInputChange(e, 'password') },
    ],
    submitButton: isRegister ? 'Sign up' : 'Sign in',
    textVariantButton: isRegister ? 'Already have an account? Sign in' : "Don't have an account? Create one",
  };

  return (
    <section className='flex max-lg:justify-center min-h-screen w-full bg-[#050814] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#130B2A] via-[#050814] to-[#010206] relative overflow-hidden'>
      {/* Epic stars/grain overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
      
      {/* Mobile Epic Aurora Background */}
      <div className="absolute inset-0 z-0 lg:hidden overflow-hidden flex items-center justify-center pointer-events-none">
        <div className="absolute w-[120vw] h-[120vw] max-w-[600px] max-h-[600px] bg-vyra-violet/30 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[100vw] h-[100vw] max-w-[500px] max-h-[500px] bg-glow-cyan/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Back Button */}
      <Link to="/" className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md shadow-lg group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-medium">Volver a inicio</span>
      </Link>

      <div className="absolute inset-x-0 w-[full] h-full object-cover z-0 pointer-events-none opacity-40 mix-blend-screen bg-transparent" />
      {/* Left Side: Orbiting Icons */}
      <span className='flex flex-col justify-center w-1/2 max-lg:hidden relative z-0 h-screen'>
        <Ripple mainCircleSize={150} />
        <TechOrbitDisplay iconsArray={vyraIcons} text={isRegister ? 'Vyra\nUniverse' : 'Vyra\nWorkspace'} />
      </span>

      {/* Right Side: Auth Form */}
      <span className='w-1/2 h-screen flex flex-col justify-center items-center max-lg:w-full max-lg:px-[5%] relative z-10'>
        <AuthTabs
          formFields={formFields}
          goTo={(e) => { e.preventDefault(); window.location.href = toggleTo; }}
          handleSubmit={handleFormSubmit}
        />
      </span>
    </section>
  );
}
