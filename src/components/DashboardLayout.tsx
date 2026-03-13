import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Newspaper, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Globe,
  Menu,
  X
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function DashboardLayout({ children }: { children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: t.dashboard, icon: LayoutDashboard, active: true },
    { name: t.athletes, icon: Users, active: false },
    { name: t.news, icon: Newspaper, active: false },
    { name: t.programs, icon: Trophy, active: false },
    { name: t.settings, icon: Settings, active: false },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-full w-64 bg-white border-r border-slate-200 transition-transform duration-300 lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/4552933d-53a5-4423-ad5e-492c50d571e0/academy-logo-a4443dc0-1773396821951.webp" 
              alt="Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-black tracking-tighter text-blue-900">CHAMPIONS</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all",
                item.active 
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-4 w-full px-4">
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl"
          >
            <LogOut className="h-5 w-5" />
            {t.logout}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between px-4 lg:px-8 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center gap-4 lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <span className="font-bold text-blue-900">CHAMPIONS</span>
          </div>

          <div className="hidden md:flex flex-1 max-w-md ml-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder={t.searchPlaceholder} 
                className="pl-10 bg-slate-50 border-none rounded-xl focus-visible:ring-blue-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 rounded-xl hidden sm:flex">
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('fr')}>Français</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="relative text-slate-600 rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </Button>

            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>

        <footer className="py-6 px-8 text-center text-xs text-slate-400 border-t border-slate-100">
          &copy; 2024 Champions Academy RDC. All rights reserved.
        </footer>
      </div>
    </div>
  );
}