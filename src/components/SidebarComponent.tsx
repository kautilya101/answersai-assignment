import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './ui/sidebar';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';

import {
  Bell,
  CalendarClock,
  CloudUpload,
  Home,
  MenuIcon,
  Settings,
  User,
} from 'lucide-react';

export const sidebarItems = [
  { title: 'Home', url: '/home', icon: <Home size={20} /> },
  { title: 'Notifications', url: '/notifications', icon: <Bell size={20} /> },
  { title: 'Reminders', url: '/reminders', icon: <CalendarClock size={20} /> },
  { title: 'Upload', url: '/upload', icon: <CloudUpload size={20} /> },
  { title: 'Settings', url: '/settings', icon: <Settings size={20} /> },
];

const SidebarComponent = () => {
  const { open: isOpen, setOpen } = useSidebar();

  return (
      <Sidebar
        collapsible='icon'
        side='left'
        variant='sidebar'
        className={`transition-all duration-300 border-none ${
          isOpen ? 'w-64' : 'w-40'
        }`}

      >
        <SidebarContent className="h-full flex flex-col bg-zinc-950 w-full">
          {/* Header with Menu Toggle */}
          <SidebarHeader className="p-4">
            <div className={`flex ${isOpen ? 'justify-end' : 'justify-center'}`}>
              <button
                onClick={() => setOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-zinc-800 transition-colors text-white"
              >
                <MenuIcon size={20} />
              </button>
            </div>
          </SidebarHeader>

          {/* Main Navigation */}
          <div className="flex-1 flex flex-col justify-start w-full">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="flex flex-col gap-8">
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <TooltipProvider>
                          <Tooltip disableHoverableContent={isOpen}>
                            <TooltipTrigger asChild>
                              <a
                                href={item.url}
                                className={`
                                  flex items-center text-sm font-medium transition-colors
                                  w-full text-white ${isOpen ? 'p-3': 'p-0'} rounded-lg hover:bg-zinc-800
                                  ${isOpen ? 'justify-start gap-3' : 'justify-center'}
                                `}
                              >
                                {item.icon}
                                {isOpen && <span className="truncate">{item.title}</span>}
                              </a>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="text-xs p-2 bg-zinc-800 ml-2">
                              {item.title}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>

          {/* Footer with Avatar */}
          <div className="p-4 border-zinc-800">
            <div
              className={`flex items-center ${
                isOpen ? 'justify-between' : 'justify-center'
              }`}
            >
              <div className="flex items-center space-x-3">
                <User className="text-white bg-zinc-800 rounded-full" size={20} />
                {isOpen && (
                  <div className="text-sm">
                    <div className="font-semibold text-white">Kautilya</div>
                    <div className="text-gray-400 text-xs">Developer</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
  );
};

export default SidebarComponent;
