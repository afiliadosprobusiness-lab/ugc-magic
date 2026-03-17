import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MOCK_DIRECTION_TAGS, MOCK_CREATORS } from '../../data/mock';
import { UploadCloud, Link as LinkIcon, Image as ImageIcon, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';

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
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-vyra-black mb-6">Create Request</h1>
        
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-soft-gray -translate-y-1/2" />
          <div className="absolute top-1/2 left-0 h-1 bg-vyra-violet -translate-y-1/2 transition-all duration-500" style={{ width: `${((step - 1) / 4) * 100}%` }} />
          
          {steps.map(s => (
            <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                step >= s.num 
                  ? 'bg-vyra-violet text-white shadow-md shadow-vyra-violet/30' 
                  : 'bg-white border-2 border-soft-gray text-gray-400'
              }`}>
                {step > s.num ? <CheckCircle2 className="w-5 h-5" /> : s.num}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${step >= s.num ? 'text-vyra-black' : 'text-gray-400'}`}>{s.title}</span>
            </div>
          ))}
        </div>
      </div>

      <Card className="p-0 border-soft-gray overflow-hidden bg-white shadow-sm">
        
        {/* STEP 1: References */}
        {step === 1 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-vyra-black mb-2">Upload References</h2>
              <p className="text-gray-500">Provide visual references to anchor the creative direction.</p>
            </div>
            
            <div className="border-2 border-dashed border-soft-gray rounded-2xl bg-ice-white/50 hover:bg-ice-white hover:border-vyra-violet/50 transition-colors p-12 text-center flex flex-col items-center justify-center cursor-pointer group mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8 text-vyra-violet" />
              </div>
              <h3 className="text-lg font-semibold text-vyra-black mb-1">Drag & drop files or URLs</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> JPEG, PNG, MP4 <span className="mx-2">•</span> <LinkIcon className="w-4 h-4" /> TikTok, IG links
              </p>
            </div>

            <div className="flex gap-4 mb-4 overflow-x-auto pb-4 scrollbar-hide">
              {/* Mock Uploaded Ref */}
              <div className="w-32 h-32 shrink-0 rounded-xl relative overflow-hidden group border border-soft-gray">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80" alt="ref" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Remove</span>
                </div>
              </div>
               <div className="w-32 h-32 shrink-0 rounded-xl relative overflow-hidden group border border-soft-gray">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="ref" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">Remove</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: creative DIrection */}
        {step === 2 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-vyra-black mb-2">Define Direction</h2>
                <p className="text-gray-500">Select the semantic tags that define the visual and narrative constraints.</p>
              </div>
              <Badge variant="glow" className="hidden sm:inline-flex bg-slate-core text-glow-cyan"><Sparkles className="w-3 h-3 mr-1" /> Auto-suggest</Badge>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {MOCK_DIRECTION_TAGS.map(tag => (
                <div 
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`p-4 rounded-xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    selectedTags.includes(tag) 
                      ? 'border-vyra-violet bg-vyra-violet/5 shadow-[0_0_15px_rgba(124,58,237,0.1)]' 
                      : 'border-soft-gray hover:border-gray-400 bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                     <span className={`font-semibold text-sm ${selectedTags.includes(tag) ? 'text-vyra-violet' : 'text-vyra-black'}`}>{tag}</span>
                     {selectedTags.includes(tag) && <CheckCircle2 className="w-4 h-4 text-vyra-violet" />}
                  </div>
                  <div className="text-xs text-gray-500 line-clamp-2">Standardizes visual framing to match premium lifestyle aesthetics.</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Creator Consistency */}
        {step === 3 && (
          <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-300">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-vyra-black mb-2">Creator Consistency</h2>
              <p className="text-gray-500">Pick profiles mapped to your selected brand direction.</p>
            </div>
            
            <div className="space-y-4">
              {MOCK_CREATORS.slice(0, 3).map(creator => (
                <div 
                  key={creator.id} 
                  onClick={() => setSelectedCreator(creator.id)}
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row gap-4 items-center cursor-pointer transition-all ${
                    selectedCreator === creator.id
                      ? 'border-electric-blue bg-electric-blue/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                      : 'border-soft-gray hover:border-gray-400 bg-white'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-vyra-black">{creator.name}</h3>
                      <Badge variant="secondary" className="bg-white mx-auto sm:mx-0 shadow-sm border border-gray-100">{creator.vibe}</Badge>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-1">Best for {creator.bestFor}. Formats: {creator.formats.join(', ')}</p>
                  </div>

                  <div className="shrink-0 flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-soft-gray min-w-[80px]">
                    <span className="text-2xl font-bold text-electric-blue tracking-tighter">{creator.score}%</span>
                    <span className="text-[10px] font-mono uppercase text-gray-400">Match</span>
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
              <h2 className="text-2xl font-bold text-vyra-black mb-2">Request System Build</h2>
              <p className="text-gray-500">Your configuration is ready. Verify parameters before creating.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-white/20 bg-slate-core text-white shadow-xl shadow-slate-900/10">
                 <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-glow-cyan">
                   <Layers className="w-3 h-3" /> Input Logic
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">References</span>
                     <span className="font-medium">2 Files</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Direction Tags</span>
                     <span className="font-medium">{selectedTags.length || 0} Selected</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Creator Profile</span>
                     <span className="font-medium">{selectedCreator ? MOCK_CREATORS.find(c => c.id === selectedCreator)?.name : 'None'}</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Campaign Angle</span>
                     <span className="font-medium">Product Focus</span>
                   </div>
                 </div>
              </Card>

              <Card className="p-6 border-vyra-violet/20 bg-vyra-black text-white shadow-xl shadow-vyra-violet/5">
                 <div className="flex items-center gap-2 mb-4 font-mono text-xs uppercase tracking-widest text-vyra-violet">
                   <UserCheck className="w-3 h-3" /> Output Expected
                 </div>
                 <div className="space-y-3">
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Variations</span>
                     <span className="font-medium">4 Outputs</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Formats</span>
                     <span className="font-medium">9:16 (Reels/TikTok)</span>
                   </div>
                   <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Turnaround</span>
                     <span className="font-medium text-green-400">Standard (48h)</span>
                   </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-gray-400 text-sm">Approval Owner</span>
                     <span className="font-medium">Jane Doe</span>
                   </div>
                 </div>
              </Card>
            </div>
          </div>
        )}

        {/* STEP 5: Final Review */}
        {step === 5 && (
          <div className="p-8 md:p-16 text-center animate-in slide-in-from-right-8 duration-300">
             <div className="w-24 h-24 rounded-full bg-green-50 border-4 border-white shadow-xl flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full border border-green-200 animate-ping opacity-20" />
                <CheckCircle2 className="w-12 h-12 text-green-500" />
             </div>
             <h2 className="text-3xl font-bold text-vyra-black mb-4">Ready to initialize</h2>
             <p className="text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
               Your structured request has been built successfully. Generating variations will consume <strong className="text-vyra-black">1 production credit</strong>.
             </p>
             <Badge variant="secondary" className="mb-10 text-sm px-4 py-1.5 font-mono shadow-inner border border-soft-gray">Draft State • Saved Locally</Badge>
          </div>
        )}

        {/* Footer controls */}
        <div className="p-6 border-t border-soft-gray bg-ice-white/50 flex justify-between items-center rounded-b-2xl">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            disabled={step === 1 || isSubmitting}
            className="text-gray-500 hover:text-vyra-black"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          {step < 5 ? (
             <Button variant="primary" onClick={handleNext} className="shadow-lg shadow-vyra-violet/20">
               Continue <ChevronRight className="w-4 h-4 ml-1" />
             </Button>
          ) : (
             <Button variant="primary" onClick={handleSubmit} isLoading={isSubmitting} className="shadow-lg shadow-green-500/20 bg-green-500 hover:bg-green-600">
               Submit Request
             </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
