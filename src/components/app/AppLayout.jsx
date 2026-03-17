import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '../blocks/sidebar';
import { VyraAppSidebar } from './VyraAppSidebar';
import Topbar from './Topbar';

export default function AppLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-ice-white text-vyra-black overflow-hidden relative">
        <VyraAppSidebar />
        
        <SidebarInset className="flex w-full flex-col overflow-hidden bg-ice-white/50">
          <Topbar />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 max-w-[1600px] w-full mx-auto relative z-10">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
