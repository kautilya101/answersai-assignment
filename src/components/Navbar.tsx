import { useState } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const Navbar = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const [search, setSearch] = useState('');

  const tabItems = [
    { key: 'charging', label: 'Charging Stations' },
    { key: 'fleet', label: 'Fleet Sizing' },
    { key: 'parking', label: 'Parking' },
  ];
  
  return (
    <div className="flex p-4 pl-8 justify-between items-center w-full bg-zinc-950">
       <div className="flex gap-4">
        {tabItems.map(tab => (
          <div
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`cursor-pointer px-4 py-1 rounded-xs ${
              activeTab === tab.key ? 'bg-zinc-800 text-white' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          value={search}
          placeholder="Search"
          className="pl-10 text-white"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
