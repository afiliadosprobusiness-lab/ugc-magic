import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MOCK_DIRECTION_TAGS, MOCK_CREATORS } from '../../data/mock';
import { UploadCloud, Link as LinkIcon, Image as ImageIcon, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, UserCheck, Layers } from 'lucide-react';

export default function RequestFlow() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState(null);

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleNext = () => setStep(prev => Math.min(prev + 1, 5));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/app/requests');
    }, 1500);
  };

  const steps = [
    { num: 1, title: 'References' },
    { num: 2, title: 'Direction' },
    { num: 3, title: 'Creator' },
    { num: 4, title: 'Build' },
    { num: 5, title: 'Review' }
  ];

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      
      {/* Header & Progress */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">Create Request</h1>
        
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 h-1 bg-glow-cyan shadow-[0_0_10px_rgba(34,211,238,0.5)] -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 4) * 100}%` }} />
          
          {steps.map(s => (
            <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                step >= s.num 
                  ? 'bg-glow-cyan text-[#0B1020] shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                  : 'bg-[#0B1020] border-2 border-white/10 text-white/40'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={`text-xs font-medium hidden sm:block tracking-wide ${step >= s.num ? 'text-white' : 'text-white/40'}`}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-0 border-white/5 overflow-hidden bg-[#0B1020] shadow-2xl">
        
        {/* STEP 1: References */}
        {step === 1 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Upload References</h2>
              <p className="text-white/50">Provide visual references to anchor the creative direction.</p>
            </div>
            
            <div className="border-2 border-dashed border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] hover:border-glow-cyan/50 transition-colors p-12 text-center flex flex-col items-center justify-center cursor-pointer group mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-glow-cyan/10 transition-all border border-white/5 group-hover:border-glow-cyan/30">
                <UploadCloud className="w-8 h-8 text-glow-cyan" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">Drag & drop files or URLs</h3>
              <p className="text-sm text-white/40 flex items-center gap-2 font-mono">
                <ImageIcon className="w-4 h-4" /> JPEG, PNG, MP4 <span className="mx-2 text-white/20">•</span> <LinkIcon className="w-4 h-4" /> TikTok, IG links
              </p>
            </div>

            <div className="flex gap-4 mb-4 overflow-x-auto pb-4 scrollbar-hide">
              {/* Mock Uploaded Ref */}
              <div className="w-32 h-32 shrink-0 rounded-xl relative overflow-hidden group border border-white/10">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" alt="ref" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer">
                  <span className="text-white text-xs font-semibold tracking-wider hover:text-red-400 transition-colors">REMOVE</span>
                </div>
              </div>
               <div className="w-32 h-32 shrink-0 rounded-xl relative overflow-hidden group border border-white/10">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="ref" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm cursor-pointer">
                  <span className="text-white text-xs font-semibold tracking-wider hover:text-red-400 transition-colors">REMOVE</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Creative Direction */}
        {step === 2 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Define Direction</h2>
                <p className="text-white/50">Select the semantic tags that define the visual and narrative constraints.</p>
              </div>
              <Badge variant="glow" className="hidden sm:inline-flex bg-glow-cyan/10 text-glow-cyan border border-glow-cyan/30">
                <Sparkles className="w-3 h-3 mr-1" /> Auto-suggested
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {MOCK_DIRECTION_TAGS.map(tag => (
                <div 
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`p-4 rounded-xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    selectedTags.includes(tag) 
                      ? 'border-glow-cyan bg-glow-cyan/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                      : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                     <span className={`font-semibold text-sm ${selectedTags.includes(tag) ? 'text-glow-cyan' : 'text-white'}`}>{tag}</span>
                     {selectedTags.includes(tag) && <CheckCircle2 className="w-4 h-4 text-glow-cyan" />}
                  </div>
                  <div className="text-xs text-white/40 line-clamp-2">Standardizes visual framing to match premium lifestyle aesthetics.</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Creator Consistency */}
        {step === 3 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Creator Consistency</h2>
              <p className="text-white/50">Pick profiles mapped to your selected brand direction.</p>
            </div>
            
            <div className="space-y-4">
              {MOCK_CREATORS.slice(0, 3).map(creator => (
                <div 
                  key={creator.id} 
                  onClick={() => setSelectedCreator(creator.id)}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row gap-4 items-center cursor-pointer transition-all ${
                    selectedCreator === creator.id
                      ? 'border-vyra-violet bg-vyra-violet/10 shadow-[0_0_20px_rgba(124,58,237,0.2)]' 
                      : 'border-white/10 hover:border-white/30 bg-white/[0.02]'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-white/20 shadow-sm relative">
                    <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                    {selectedCreator === creator.id && (
                       <div className="absolute inset-0 bg-vyra-violet/20 flex items-center justify-center">
                         <CheckCircle2 className="w-8 h-8 text-white drop-shadow-md" />
                       </div>
                    )}
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                      <h3 className="font-bold text-lg text-white">{creator.name}</h3>
                      <Badge variant="glass" className="mx-auto sm:mx-0 border-white/10 text-white/70">{creator.vibe}</Badge>
                    </div>
                    <p className="text-sm text-white/40 line-clamp-1">Formats: {creator.formats.join(', ')}</p>
                  </div>

                  <div className="shrink-0 flex flex-col items-center justify-center p-3 bg-black/40 rounded-xl border border-white/5 min-w-[80px]">
                    <span className="text-2xl font-bold text-glow-cyan tracking-tighter">{creator.score}%</span>
                    <span className="text-[10px] font-mono uppercase text-white/40">Match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Request Build Summary */}
        {step === 4 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300 flex flex-col gap-6">
            <div className="mb-2">
              <h2 className="text-2xl font-bold text-white mb-2">Request System Build</h2>
              <p className="text-white/50">Your configuration is ready. Verify parameters before creating.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-white/10 bg-black/40 text-white shadow-xl">
                 <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-glow-cyan">
                   <Layers className="w-4 h-4" /> Input Logic
                 </div>
                 <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">References</span>
                     <span className="font-medium text-white/90">2 Files</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">Direction Tags</span>
                     <span className="font-medium text-white/90">{selectedTags.length || 0} Selected</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">Creator Profile</span>
                     <span className="font-medium text-white/90">{selectedCreator ? MOCK_CREATORS.find(c => c.id === selectedCreator)?.name : 'Auto-Match'}</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3 border-transparent">
                     <span className="text-white/40 text-sm">Campaign Angle</span>
                     <span className="font-medium text-white/90">Product Focus</span>
                   </div>
                 </div>
              </Card>

              <Card className="p-6 border-vyra-violet/30 bg-vyra-violet/5 text-white shadow-xl">
                 <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-vyra-violet">
                   <UserCheck className="w-4 h-4" /> Output Expected
                 </div>
                 <div className="space-y-4">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">Variations</span>
                     <span className="font-medium text-white/90">4 Outputs</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">Formats</span>
                     <span className="font-medium text-white/90">9:16 (Reels/TikTok)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                     <span className="text-white/40 text-sm">Turnaround</span>
                     <span className="font-medium text-electric-blue">Standard (48h)</span>
                   </div>
                    <div className="flex justify-between border-b border-white/5 pb-3 border-transparent">
                     <span className="text-white/40 text-sm">Approval Owner</span>
                     <span className="font-medium text-white/90">Jane Doe</span>
                   </div>
                 </div>
              </Card>
            </div>
          </div>
        )}

        {/* STEP 5: Final Review */}
        {step === 5 && (
          <div className="p-8 md:p-16 text-center animate-in slide-in-from-right-8 duration-300">
             <div className="w-24 h-24 rounded-full bg-glow-cyan/10 border-4 border-glow-cyan/30 shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border border-glow-cyan animate-ping opacity-20" />
                <CheckCircle2 className="w-12 h-12 text-glow-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-4">Ready to initialize</h2>
             <p className="text-white/50 mb-8 max-w-sm mx-auto leading-relaxed">
               Your structured request has been built successfully. Generating variations will consume <strong className="text-white">1 production credit</strong>.
             </p>
             <Badge variant="glass" className="mb-10 text-xs px-4 py-2 font-mono shadow-inner border border-white/10 text-white/60">
               Draft State • Saved Locally
             </Badge>
          </div>
        )}

        {/* Footer controls */}
        <div className="p-6 border-t border-white/5 bg-black/40 flex justify-between items-center rounded-b-2xl">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            disabled={step === 1 || isSubmitting}
            className="text-white/50 hover:text-white disabled:opacity-30 hover:bg-white/5"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {step < 5 ? (
             <Button variant="primary" onClick={handleNext} className="bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
               Continue <ChevronRight className="w-4 h-4 ml-1" />
             </Button>
          ) : (
             <Button variant="primary" onClick={handleSubmit} isLoading={isSubmitting} className="shadow-[0_0_20px_rgba(34,211,238,0.3)] bg-glow-cyan text-vyra-black hover:bg-glow-cyan/90 border-none font-bold">
               Submit Request
             </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
