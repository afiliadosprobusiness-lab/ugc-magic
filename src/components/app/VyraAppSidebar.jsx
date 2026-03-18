import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, LibraryBig, Settings2, Sparkles, Video } from 'lucide-react'
import { useVyraApp } from '../../contexts/VyraAppContext'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../blocks/sidebar'

const navItems = [
  { title: 'Overview', url: '/app/overview', icon: LayoutDashboard },
  { title: 'Angle Engine', url: '/app/angles', icon: Sparkles },
  { title: 'UGC Creator', url: '/app/ugc', icon: Video },
  { title: 'Library', url: '/app/library', icon: LibraryBig },
  { title: 'Settings', url: '/app/settings', icon: Settings2 },
]

export function VyraAppSidebar() {
  const location = useLocation()
  const { activeBrand } = useVyraApp()

  return (
    <Sidebar variant="sidebar" className="border-r border-white/5 bg-[#07101D] text-white">
      <SidebarHeader className="px-6 pb-5 pt-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-white">
            V
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-white">Vyra</div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/35">Creative workflow</div>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-4 text-[11px] uppercase tracking-[0.24em] text-white/30">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url
                const Icon = item.icon

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link to={item.url} className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-white/45'}`} />
                        <span className={`${isActive ? 'text-white' : 'text-white/65'} font-medium`}>
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto px-4 pb-4">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-white/35">Active brand</div>
            <div className="mt-3 text-sm font-semibold text-white">{activeBrand.name}</div>
            <div className="mt-1 text-sm leading-relaxed text-white/45">{activeBrand.workspaceTag}</div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
