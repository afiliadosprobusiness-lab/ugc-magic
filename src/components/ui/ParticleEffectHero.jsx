import React, { useCallback, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, MousePointer2 } from 'lucide-react'
import { Badge } from './Badge'
import { Button } from './Button'

const PARTICLE_DENSITY = 0.00012
const BACKGROUND_PARTICLE_DENSITY = 0.000035
const MOUSE_RADIUS = 180
const RETURN_SPEED = 0.06
const DAMPING = 0.9
const REPULSION_STRENGTH = 1.15

const workflowSteps = [
  ['Angle Engine', 'Structured brief'],
  ['Selected angle', 'Hook and use case'],
  ['UGC Creator', 'Test-ready variants'],
]

const floatingTags = [
  { label: 'Pain Point', className: 'left-2 top-8 md:left-4 md:top-12' },
  { label: 'Creator Review', className: 'right-8 top-2 md:right-10 md:top-8' },
  { label: 'Bathroom shelf', className: 'right-3 top-28 md:right-6 md:top-36' },
  { label: 'CTA overlay', className: 'left-0 bottom-32 md:left-2 md:bottom-36' },
]

const previewVariants = [
  {
    title: 'Variant A',
    status: 'Ready for testing',
    image:
      "linear-gradient(180deg, rgba(5,8,20,0.16) 0%, rgba(5,8,20,0.8) 100%), url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80')",
  },
  {
    title: 'Variant B',
    status: 'Script ready',
    image:
      "linear-gradient(180deg, rgba(5,8,20,0.16) 0%, rgba(5,8,20,0.8) 100%), url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80')",
  },
]

function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

function StepPill({ index, title, body }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-4 backdrop-blur">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/34">0{index + 1}</div>
      <div className="mt-2 text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/48">{body}</div>
    </div>
  )
}

function FloatingTag({ label, className }) {
  return (
    <div className={`absolute z-20 hidden rounded-full border border-white/12 bg-[#0b1019]/88 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/58 backdrop-blur md:block ${className}`}>
      {label}
    </div>
  )
}

export function ParticleEffectHero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const backgroundParticlesRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false })
  const frameRef = useRef(0)

  const initParticles = useCallback((width, height) => {
    const particles = []
    const particleCount = Math.floor(width * height * PARTICLE_DENSITY)

    for (let index = 0; index < particleCount; index += 1) {
      const x = Math.random() * width
      const y = Math.random() * height

      particles.push({
        x,
        y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        size: randomRange(1, 2.3),
        color: Math.random() > 0.92 ? '#95a5ff' : '#ffffff',
      })
    }

    const backgroundParticles = []
    const backgroundCount = Math.floor(width * height * BACKGROUND_PARTICLE_DENSITY)

    for (let index = 0; index < backgroundCount; index += 1) {
      backgroundParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: randomRange(0.6, 1.4),
        alpha: randomRange(0.08, 0.34),
        phase: Math.random() * Math.PI * 2,
      })
    }

    particlesRef.current = particles
    backgroundParticlesRef.current = backgroundParticles
  }, [])

  const animate = useCallback(function animateFrame(time) {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const width = canvas.clientWidth
    const height = canvas.clientHeight

    context.clearRect(0, 0, width, height)

    const glow = context.createRadialGradient(width * 0.7, height * 0.2, 0, width * 0.7, height * 0.2, width * 0.6)
    glow.addColorStop(0, 'rgba(149, 165, 255, 0.16)')
    glow.addColorStop(1, 'rgba(5, 8, 20, 0)')
    context.fillStyle = glow
    context.fillRect(0, 0, width, height)

    const ambient = backgroundParticlesRef.current
    for (let index = 0; index < ambient.length; index += 1) {
      const particle = ambient[index]
      particle.x += particle.vx
      particle.y += particle.vy

      if (particle.x < 0) particle.x = width
      if (particle.x > width) particle.x = 0
      if (particle.y < 0) particle.y = height
      if (particle.y > height) particle.y = 0

      const twinkle = Math.sin(time * 0.002 + particle.phase) * 0.5 + 0.5
      context.globalAlpha = particle.alpha * (0.35 + twinkle * 0.65)
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      context.fillStyle = '#ffffff'
      context.fill()
    }

    context.globalAlpha = 1

    const particles = particlesRef.current
    const mouse = mouseRef.current

    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index]
      const dx = mouse.x - particle.x
      const dy = mouse.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy) || 1

      if (mouse.isActive && distance < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS
        particle.vx -= (dx / distance) * force * REPULSION_STRENGTH * 4.5
        particle.vy -= (dy / distance) * force * REPULSION_STRENGTH * 4.5
      }

      particle.vx += (particle.originX - particle.x) * RETURN_SPEED
      particle.vy += (particle.originY - particle.y) * RETURN_SPEED
      particle.vx *= DAMPING
      particle.vy *= DAMPING
      particle.x += particle.vx
      particle.y += particle.vy

      const velocity = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
      const opacity = Math.min(0.28 + velocity * 0.14, 1)
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      context.fillStyle =
        particle.color === '#ffffff' ? `rgba(255,255,255,${opacity})` : `rgba(149,165,255,${Math.max(opacity, 0.5)})`
      context.fill()
    }

    frameRef.current = requestAnimationFrame(animateFrame)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current
      const container = containerRef.current
      if (!canvas || !container) return

      const { width, height } = container.getBoundingClientRect()
      const ratio = window.devicePixelRatio || 1
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      const context = canvas.getContext('2d')
      if (context) {
        context.setTransform(ratio, 0, 0, ratio, 0, 0)
      }

      initParticles(width, height)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [initParticles])

  useEffect(() => {
    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current)
  }, [animate])

  const handleMouseMove = (event) => {
    const container = containerRef.current
    if (!container) return

    const bounds = container.getBoundingClientRect()
    mouseRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      isActive: true,
    }
  }

  const handleMouseLeave = () => {
    mouseRef.current.isActive = false
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#060b15] shadow-[0_28px_120px_rgba(0,0,0,0.32)]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_30%),linear-gradient(180deg,rgba(5,8,20,0.28),rgba(5,8,20,0.9))]" />
      <div className="absolute left-1/2 top-[18%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#95a5ff]/14 blur-3xl" />

      <div className="relative z-10 grid min-h-[720px] gap-12 px-6 py-8 lg:grid-cols-[1.04fr,0.96fr] lg:px-10 lg:py-10">
        <div className="flex flex-col justify-between">
          <div className="max-w-3xl">
            <Badge variant="glow">{badge}</Badge>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/58 md:text-xl">{description}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
              <Button variant="outline" size="lg" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            </div>
          </div>

          <div className="pointer-events-none mt-12 grid gap-3 sm:grid-cols-3">
            {workflowSteps.map(([stepTitle, stepBody], index) => (
              <StepPill key={stepTitle} index={index} title={stepTitle} body={stepBody} />
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center py-4 lg:py-8">
          {floatingTags.map((tag) => (
            <FloatingTag key={tag.label} label={tag.label} className={tag.className} />
          ))}

          <div className="relative w-full max-w-[540px]">
            <div className="absolute inset-x-10 top-10 z-0 h-40 rounded-full bg-[#95a5ff]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-4 backdrop-blur">
              <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-[#0b1019]/84 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/60 backdrop-blur">
                Angle Engine
              </div>

              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#090d18]">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(5,8,20,0.18) 0%, rgba(5,8,20,0.22) 34%, rgba(5,8,20,0.96) 100%), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=80')",
                  }}
                />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="rounded-[24px] border border-white/10 bg-[#0a0f19]/84 p-5 backdrop-blur">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/34">Selected angle</div>
                    <div className="mt-3 max-w-sm text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
                      Glow without restarting your routine
                    </div>
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/56">
                      Script, tone, scene, and CTA stay attached to the angle instead of drifting into a generic video builder.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                      Ready for testing
                    </div>
                  </div>
                </div>
              </div>

              <div className="-mt-16 grid grid-cols-2 gap-3 px-2 pb-2 pt-6 md:px-6">
                {previewVariants.map((variant) => (
                  <div key={variant.title} className="rounded-[22px] border border-white/10 bg-[#0b1019]/88 p-2 backdrop-blur">
                    <div className="overflow-hidden rounded-[18px] border border-white/8">
                      <div className="aspect-[16/11] bg-cover bg-center" style={{ backgroundImage: variant.image }} />
                    </div>
                    <div className="px-2 pb-2 pt-3">
                      <div className="text-sm font-semibold text-white">{variant.title}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/38">{variant.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-[22px] border border-white/10 bg-[#0b1019]/74 p-4 backdrop-blur">
                <div>
                  <div className="text-sm font-semibold text-white">Grouped by angle</div>
                  <div className="mt-1 text-sm text-white/48">One direction, multiple variants, cleaner testing decisions.</div>
                </div>
                <Badge variant="success">2 variants</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/38 backdrop-blur md:flex">
        <MousePointer2 className="h-3.5 w-3.5" />
        Move to preview the workflow
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </section>
  )
}
