import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button'; 
import { cn } from '../../lib/utils'; 

export const HeroSection = React.forwardRef(
  ({ badge, title, subtitle, images, className, children, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    React.useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-vyra-black text-white p-4',
          className
        )}
        {...props}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" aria-hidden="true">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[10%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(124,58,237,0.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[10%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(34,211,238,0.1),rgba(255,255,255,0))]"></div>
        </div>

        {/* Content */}
        <div className="z-10 flex w-full flex-col items-center text-center space-y-12 md:space-y-16 mt-20">
          
          {/* Header Section */}
          <div className="space-y-6 flex flex-col items-center">
            {badge && (
              <div className="mb-2">
                {badge}
              </div>
            )}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl leading-tight">
              {title}
            </h1>
            <p className="max-w-3xl mx-auto text-white/50 text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
            {/* Action Buttons slot (custom added for Vyra) */}
            {children && (
              <div className="pt-4">
                 {children}
              </div>
            )}
          </div>

          {/* Main Showcase Section */}
          <div className="relative w-full max-w-[100vw] h-[350px] md:h-[500px] flex items-center justify-center">
            {/* Carousel Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
              {images.map((image, index) => {
                const offset = index - currentIndex;
                const total = images.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos = pos - total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className={cn(
                      'absolute w-44 h-80 sm:w-56 sm:h-[400px] md:w-72 md:h-[500px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]',
                      'flex items-center justify-center'
                    )}
                    style={{
                      transform: `
                        translateX(${(pos) * 55}%) 
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.65})
                        rotateY(${(pos) * -15}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                      filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                      visibility: Math.abs(pos) > 2 ? 'hidden' : 'visible',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 bg-[#0B1020]/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-white"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 rounded-full h-12 w-12 z-20 bg-[#0B1020]/50 backdrop-blur-md border border-white/10 text-white/80 hover:text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

HeroSection.displayName = 'HeroSection';
