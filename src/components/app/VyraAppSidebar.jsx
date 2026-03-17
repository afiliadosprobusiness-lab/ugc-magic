import React from "react"
import { useLocation, Link } from "react-router-dom"
import { LayoutDashboard, FileText, Image as ImageIcon, Sparkles, Users, CreditCard, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "../blocks/sidebar"

const navItems = [
  { title: "Dashboard", url: "/app", icon: LayoutDashboard },
  { title: "Requests", url: "/app/requests", icon: FileText },
  { title: "Assets", url: "/app/assets", icon: ImageIcon },
  { title: "Creative Direction", url: "/app/direction", icon: Sparkles },
  { title: "Creator Profiles", url: "/app/creators", icon: Users },
  { title: "Plans", url: "/app/plans", icon: CreditCard },
  { title: "Settings", url: "/app/settings", icon: Settings },
]

export function VyraAppSidebar() {
  const location = useLocation()
  
  return (
    <Sidebar variant="sidebar" className="border-r border-white/5 bg-vyra-black text-white">
      <SidebarHeader className="pt-6 pb-4 px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-glow-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,184,255,0.4)]">
            <span className="font-bold text-vyra-black text-xl">V</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            STUDIO
          </span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/40 uppercase tracking-widest text-xs mb-2">Production</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = item.url === '/app' 
                  ? location.pathname === '/app' || location.pathname === '/app/'
                  : location.pathname.startsWith(item.url);
                  
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className={`h-5 w-5 ${isActive ? 'text-glow-cyan drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'text-white/60'}`} />
                        <span className={isActive ? 'font-semibold text-white' : 'font-medium text-white/70 hover:text-white'}>
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
      </SidebarContent>
    </Sidebar>
  )
}
