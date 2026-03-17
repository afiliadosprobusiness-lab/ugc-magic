import React from "react"
import { useNavigate } from "react-router-dom"
import {
  ChevronUp,
  CircleFadingPlus,
  Menu,
  MessageCircle,
  Phone,
  Settings,
  User2,
  Home,
  Sparkles,
  Layers,
  CreditCard,
  Crown,
  TrendingUp,
  Globe
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar
} from "./sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useLanguage } from "../../contexts/LanguageContext"

export function AppSidebar() {
  const [open, setOpen] = React.useState(false)
  const { toggleSidebar } = useSidebar()
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const toggleLanguage = (e) => {
    e.preventDefault();
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { title: "Home", icon: Home, onClick: () => navigate('/') },
    { title: t('nav.benefits', {defaultValue: "Benefits"}), icon: Sparkles, onClick: () => { window.location.hash = '#benefits' } },
    { title: t('nav.howItWorks', {defaultValue: "How it works"}), icon: Layers, onClick: () => { window.location.hash = '#how-it-works' } },
    { title: t('nav.plans', {defaultValue: "Plans"}), icon: CreditCard, onClick: () => { window.location.hash = '#plans' } },
    { title: t('nav.premium', {defaultValue: "Premium"}), icon: Crown, onClick: () => { window.location.hash = '#premium' } },
    { title: t('nav.results', {defaultValue: "Results"}), icon: TrendingUp, onClick: () => { window.location.hash = '#results' } },
    { title: language.toUpperCase(), icon: Globe, onClick: toggleLanguage },
  ]

  return (
    <Sidebar
      open={open}
      onOpenChange={setOpen}
      variant="float"
      collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menú</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={toggleSidebar} asChild>
                  <button className="cursor-pointer">
                    <Menu />
                    <span>Colapsar</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button onClick={item.onClick} className="cursor-pointer w-full text-left">
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings /> Settings
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Cliente Vyra
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <button onClick={() => navigate('/login')} className="w-full text-left">Log In</button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Soporte</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
