import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LayoutDashboard, Inbox, Image, Edit3, Users, CreditCard, Settings } from 'lucide-react';

export default function Sidebar() {
  const { t } = useLanguage();

  const navItems = [
    { to: '/app', icon: <LayoutDashboard className="w-4 h-4" />, label: t('app.sidebar.dashboard'), exact: true },
    { to: '/app/requests', icon: <Inbox className="w-4 h-4" />, label: t('app.sidebar.requests') },
    { to: '/app/assets', icon: <Image className="w-4 h-4" />, label: t('app.sidebar.assets') },
    { to: '/app/direction', icon: <Edit3 className="w-4 h-4" />, label: t('app.sidebar.direction') },
    { to: '/app/creators', icon: <Users className="w-4 h-4" />, label: t('app.sidebar.creators') },
  ];

  const bottomItems = [
    { to: '/app/plans', icon: <CreditCard className="w-4 h-4" />, label: t('app.sidebar.plans') },
    { to: '/app/settings', icon: <Settings className="w-4 h-4" />, label: t('app.sidebar.settings') },
  ];

  return (
    <aside className="w-64 border-r border-soft-gray bg-white hidden md:flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b border-soft-gray">
        <span className="text-xl font-bold tracking-tight text-vyra-black flex items-center gap-2">
          <span className="bg-vyra-black text-white w-6 h-6 rounded flex items-center justify-center text-xs">V</span>
          VYRA
        </span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 w-full">
        {navItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            end={item.exact}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-vyra-violet/10 text-vyra-violet' 
                  : 'text-gray-600 hover:bg-soft-gray hover:text-vyra-black'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
        
        <div className="mt-8 mb-4 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Workspace
        </div>

        {bottomItems.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.to}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-vyra-violet/10 text-vyra-violet' 
                  : 'text-gray-600 hover:bg-soft-gray hover:text-vyra-black'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
