import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarInset, SidebarProvider } from '../blocks/sidebar'
import { VyraAppProvider, useVyraApp } from '../../contexts/VyraAppContext'
import { VyraAppSidebar } from './VyraAppSidebar'
import Topbar from './Topbar'
import ToastViewport from './ToastViewport'

function AppShell() {
  const { toasts } = useVyraApp()

  return (
    <SidebarProvider>
      <div className="surface-app-shell relative flex min-h-screen w-full overflow-hidden text-white">
        <VyraAppSidebar />

        <SidebarInset className="relative flex w-full flex-col overflow-hidden bg-transparent">
          <Topbar />
          <ToastViewport toasts={toasts} />

          <main className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-1 overflow-y-auto overflow-x-hidden px-4 pb-10 pt-4 md:px-8">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default function AppLayout() {
  return (
    <VyraAppProvider>
      <AppShell />
    </VyraAppProvider>
  )
}
