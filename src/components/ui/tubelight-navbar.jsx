import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex justify-center pointer-events-none w-max max-w-[100vw] px-0 md:px-4 scale-[0.85] sm:scale-100 origin-top",
        className,
      )}
    >
      <div className="pointer-events-auto flex items-center justify-center gap-0.5 sm:gap-2 bg-[#0B1020]/90 border border-white/10 backdrop-blur-[12px] p-1 sm:p-1.5 rounded-full shadow-lg shadow-black/50 mx-auto w-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name)
                if (item.onClick) item.onClick()
              }}
              className={cn(
                "relative cursor-pointer text-[13px] sm:text-sm font-semibold px-2 sm:px-5 py-1.5 sm:py-2.5 rounded-full transition-colors flex items-center justify-center shrink-0",
                "text-white/70 hover:text-white",
                isActive && "text-glow-cyan bg-white/5",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={16} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-glow-cyan/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-glow-cyan rounded-t-full">
                    <div className="absolute w-12 h-6 bg-glow-cyan/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-glow-cyan/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-glow-cyan/20 rounded-full blur-[2px] top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
