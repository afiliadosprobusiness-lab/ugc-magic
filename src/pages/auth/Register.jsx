import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Globe, Layers } from 'lucide-react';

export default function Register() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Fake workspace creation delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-ice-white flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-cyan/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="text-xl tracking-tight font-bold text-vyra-black flex items-center gap-2">
            <span className="bg-vyra-black text-white w-8 h-8 rounded shrink-0 flex items-center justify-center text-sm">V</span>
            VYRA
          </Link>
          <button 
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-vyra-violet transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="uppercase">{language}</span>
          </button>
        </div>

        <Card className="p-8 border-soft-gray bg-white shadow-xl mb-6">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">Workspace Setup</Badge>
            <h1 className="text-2xl font-bold tracking-tight text-vyra-black">
              Start your workspace
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Join visual brands shipping structured UGC.
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-vyra-black">Full Name</label>
              <Input type="text" placeholder="Jane Doe" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-vyra-black">Work Email</label>
              <Input type="email" placeholder="jane@brand.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-vyra-black">Brand Name</label>
              <Input type="text" placeholder="Acme Skincare" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-vyra-black">Brand Category</label>
              <select className="flex h-10 w-full rounded-md border border-soft-gray bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vyra-violet">
                <option value="">Select industry</option>
                <option value="beauty">Beauty & Skincare</option>
                <option value="jewelry">Jewelry</option>
                <option value="fashion">Fashion & Accessories</option>
                <option value="luxury">Luxury Product</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-vyra-black">Password</label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2" isLoading={isLoading}>
                {!isLoading && <Layers className="w-4 h-4" />}
                Create workspace
              </Button>
            </div>
          </form>
        </Card>

        <div className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-vyra-black font-semibold hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
}
