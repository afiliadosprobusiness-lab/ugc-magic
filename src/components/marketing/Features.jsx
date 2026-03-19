import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Terminal, Database, PlayCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const { language } = useLanguage();

  return (
    <section className="py-32 bg-[#0B1020] relative z-10 border-b border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-vyra-violet/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 relative">
          <h2 className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-vyra-violet font-semibold mb-6 inline-block bg-vyra-violet/10 px-4 py-1.5 rounded-full border border-vyra-violet/20">
            {language === 'en' ? 'HOW IT WORKS' : 'CÓMO FUNCIONA'}
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8">
            {language === 'en' ? 'From reference to campaign-ready' : 'De la referencia a la pieza'} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vyra-violet to-glow-cyan">
              {language === 'en' ? 'assets.' : 'lista para campaña.'}
            </span>
          </h3>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {language === 'en' 
              ? 'A serious workflow designed to protect your visual identity and accelerate your creative production.' 
              : 'Un flujo serio diseñado para cuidar la identidad visual de tu marca y acelerar la producción de tus creatividades.'}
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="relative mt-20">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-glow-cyan/40 to-transparent z-0 w-1/3 animate-[pulse_3s_ease-in-out_infinite]" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="relative group">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                
                <div className="w-14 h-14 rounded-2xl bg-[#111625] border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-xl group-hover:border-glow-cyan/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-glow-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-mono text-xl text-glow-cyan font-bold">01</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">
                  {language === 'en' ? 'Define Your Standard' : 'Define tu estándar'}
                </h4>
                <p className="text-white/50 text-sm mb-10 min-h-[60px]">
                  {language === 'en' ? 'Upload key references and establish the essential aesthetic details that give life to your brand.' : 'Sube tus referencias clave y establece los detalles estéticos esenciales que dan vida a tu marca.'}
                </p>

                {/* UI Box 1 */}
                <div className="w-full bg-[#111625] border border-white/5 rounded-2xl p-5 shadow-2xl relative overflow-hidden h-[160px] transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020]/80 z-10 pointer-events-none" />
                  <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest mb-4">Input Deck</div>
                  
                  <div className="space-y-3 relative z-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-glow-cyan/20 flex items-center justify-center">
                        <Terminal className="w-3 h-3 text-glow-cyan" />
                      </div>
                      <div className="h-2 w-24 bg-white/20 rounded-full" />
                    </div>
                     <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-3 ml-4">
                      <div className="w-4 h-4 rounded-full border border-white/20" />
                      <div className="h-2 w-16 bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                
                <div className="w-14 h-14 rounded-2xl bg-[#111625] border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-xl group-hover:border-vyra-violet/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-vyra-violet/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-mono text-xl text-vyra-violet font-bold">02</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">
                  {language === 'en' ? 'Structured Direction' : 'Dirección estructurada'}
                </h4>
                <p className="text-white/50 text-sm mb-10 min-h-[60px]">
                  {language === 'en' ? 'Vyra organizes the workflow to reflect your brief. We maintain aesthetic consistency from the moment of capture, reducing manual corrections.' : 'Vyra organiza el flujo para que cada detalle refleje tu brief. Cuidamos la consistencia estética desde la captura, reduciendo correcciones manuales.'}
                </p>

                {/* UI Box 2 */}
                <div className="w-full bg-[#111625] border border-white/5 rounded-2xl p-5 shadow-2xl relative overflow-hidden h-[160px] transform transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020]/80 z-10 pointer-events-none" />
                   <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest mb-4">Vyra Core</div>
                   
                   <div className="relative z-0 opacity-70 group-hover:opacity-100 transition-opacity font-mono text-xs">
                     <div className="text-vyra-violet border-l-2 border-vyra-violet/50 pl-3 py-1 bg-vyra-violet/5 mb-2">
                       "angle": "pain_point",
                     </div>
                     <div className="text-glow-cyan border-l-2 border-glow-cyan/50 pl-3 py-1 bg-glow-cyan/5 mb-2 ml-2">
                       "creator_match": 0.98,
                     </div>
                     <div className="text-white/60 border-l-2 border-white/20 pl-3 py-1 bg-white/5 ml-4 flex items-center gap-2">
                       "status": <span className="bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded text-[8px]">ACTIVE</span>
                     </div>
                   </div>
                </div>

              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                
                <div className="w-14 h-14 rounded-2xl bg-[#111625] border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-xl group-hover:border-white/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-mono text-xl text-white font-bold">03</span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">
                  {language === 'en' ? 'Ready to Iterate' : 'Listos para iterar'}
                </h4>
                <p className="text-white/50 text-sm mb-10 min-h-[60px]">
                  {language === 'en' ? 'Receive UGC production variations aligned with your standards, packaged and ready to scale your campaigns.' : 'Recibe variaciones de producción UGC alineadas con tus pautas, empaquetadas y listas para escalar tus campañas.'}
                </p>

                {/* UI Box 3 */}
                <div className="w-full bg-[#111625] border border-white/5 rounded-2xl p-5 shadow-2xl relative overflow-hidden h-[160px] transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1020]/90 z-10 pointer-events-none" />
                  <div className="text-[10px] text-white/30 font-mono uppercase tracking-widest mb-4">Final Asset</div>
                  
                  <div className="relative z-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#1A2235] border border-white/10 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center opacity-40 blur-[1px]" />
                      <PlayCircle className="w-8 h-8 text-white/80 relative z-10" />
                      
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-mono border border-white/10 z-10 text-white">
                        <CheckCircle2 className="w-2.5 h-2.5 text-green-400" />
                        APPROVED
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Microcopy final */}
        <div className="text-center mt-24 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 text-sm md:text-base font-medium text-white/40">
          <span>{language === 'en' ? 'Less creative friction.' : 'Menos fricción creativa.'}</span>
          <ArrowRight className="w-4 h-4 text-glow-cyan/50 hidden md:block" />
          <span className="text-white/90">{language === 'en' ? 'More capacity to iterate.' : 'Más capacidad para iterar.'}</span>
        </div>

      </div>
    </section>
  );
}
