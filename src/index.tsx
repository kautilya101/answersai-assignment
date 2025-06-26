import { useState } from 'react';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Navbar from './components/Navbar';
import { SidebarProvider } from './components/ui/sidebar';
import SidebarComponent from './components/SidebarComponent';

import ChargingStations from './pages/ChargingStations';
import FleetSizing from './pages/FleetSizing';
import Parking from './pages/Parking';

function AppShell() {
  const [activeTab, setActiveTab] = useState('charging');

  const renderTabComponent = () => {
    switch (activeTab) {
      case 'charging':
        return <ChargingStations />;
      case 'fleet':
        return <FleetSizing />;
      case 'parking':
        return <Parking />;
      default:
        return null;
    }
  };

  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={false}>
        <div className='flex min-h-screen w-full border-none bg-zinc-950'>
          <SidebarComponent />
          <div className="flex flex-col flex-1">
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
            <main className='flex-1 overflow-y-hidden bg-zinc-950 w-full border-t-1 border-l-1 border-zinc-600 rounded-sm'>
              {renderTabComponent()}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default AppShell;
