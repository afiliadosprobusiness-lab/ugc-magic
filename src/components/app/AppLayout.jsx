import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-ice-white relative scroll-smooth text-vyra-black max-w-[100vw] overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 max-w-[1400px] w-full mx-auto relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
