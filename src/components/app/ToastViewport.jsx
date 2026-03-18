import React from 'react'
import { CheckCircle2, Info, Sparkles } from 'lucide-react'
import { Badge } from '../ui/Badge'

const iconMap = {
  glass: Sparkles,
  violet: Info,
  success: CheckCircle2,
}

export default function ToastViewport({ toasts }) {
  if (!toasts.length) {
    return null
  }

  return (
    <div className="pointer-events-none fixed right-4 top-20 z-[60] flex w-[min(360px,calc(100vw-2rem))] flex-col gap-3">
      {toasts.map((toast) => {
        const Icon = iconMap[toast.variant] || Sparkles

        return (
          <div
            key={toast.id}
            className="pointer-events-auto overflow-hidden rounded-[22px] border border-white/10 bg-[#0B1020]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2 text-white/80">
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-white">{toast.title}</p>
                  <Badge variant={toast.variant === 'violet' ? 'violet' : 'glow'} className="text-[10px]">
                    Live
                  </Badge>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{toast.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
