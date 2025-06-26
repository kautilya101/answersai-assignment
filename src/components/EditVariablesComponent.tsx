import { useRef, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, ChevronDown, ChevronUp, History, Info, Plus, Search, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import type { VariableItemProps, EditVariablesComponentProps, Variable } from "@/types.ts";


const VariableItem = ({ variable, onToggle, onHover, onLeave, updateDescription }: VariableItemProps) => {
  return (
    <div 
      className="relative"
      onMouseEnter={() => onHover(variable)}
      onMouseLeave={onLeave}
    >
      <div className={`flex items-center justify-between px-2 gap-2 rounded-full border transition-colors ${
        variable.active 
          ? 'bg-green-900 border-green-300 text-green-300 dark:bg-green-900/30 dark:border-green-500 dark:text-green-400'
          : 'bg-zinc-800/70 border-border text-white/40'
      }`}>
        <span className="text-sm font-medium">{variable.name}</span>
        <div className="flex items-center">
          <Button
            onClick={() => updateDescription({ heading: variable.name, value: variable.description })}
            className={`${variable.active ? 'text-green-300 hover:text-green-500' : 'text-white/40'} p-0 cursor-pointer bg-transparent hover:bg-transparent`}

          >
            <Sparkles size={6} />
          </Button>
          <Button
            onClick={() => onToggle(variable.id, !variable.active)}
            variant="ghost"
            size="sm"
            className={` cursor-pointer h-6 w-6 p-0 ${variable.active ? 'hover:bg-green-900/30 ': 'hover:bg-zinc-600'} `}
          >
            {
              variable.active ? <Check size={6}/> :<Plus size={6} />
            }
          </Button>
        </div>
      </div>
    </div>
  );
};

// Edit Variables Sheet Component
const EditVariablesComponent = ({ isOpen, onClose, variables, onVariableToggle }: EditVariablesComponentProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [details, setDetails] = useState<{heading: string, value: string}>({
    heading: '',
    value: ''
  });
  const [expandedSections, setExpandedSections] = useState({
    primary: false,
    secondary: false
  });

  const onHoverVariableItem = (variable: Variable) => {
    hoverTimerRef.current = setTimeout(() => {
      setDetails({heading: variable.name, value: variable.description})
    }, 1500)
  }

  const onLeave = () => {
    if(hoverTimerRef.current){
      clearTimeout(hoverTimerRef.current)
    }
  }

  const toggleSection = (section : 'primary' | 'secondary') => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredVariables = variables
  .map((category) => ({
    ...category,
    variables: category.variables.filter((v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }))
  .filter((category) => category.variables.length > 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[500px] sm:w-[600px] !max-w-none border-l-2 border-zinc-600 p-0 bg-zinc-950 text-white">
        <SheetHeader className="">
          <SheetTitle className="text-lg font-semibold text-white">Edit Variables</SheetTitle>
        </SheetHeader>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className=" flex gap-2 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <Input
              type="text"
              placeholder="Carbon"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
              />
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" className="rounded-sm">
              <Sparkles size={1} />Autofill
            </Button>
            <Button size="sm" className="bg-green-800 rounded-sm hover:bg-green-700">
              <History size={1} /> Rerun
            </Button>
          </div>
          </div>
          
          {/* Variable Categories */}
          <div className="border border-zinc-500 bg-zinc-800 rounded-sm">
            <div className="p-6 space-y-6">

            {filteredVariables.map((category)  => (
              <div key={category.id} className="space-y-3">
                <h3 className="font-semibold text-white">{category.name}</h3>
                <div className="space-y-2 flex flex-wrap gap-4">
                  {category.variables.map((variable) => (
                    <VariableItem
                      key={variable.id}
                      variable={variable}
                      onToggle={(id, active) => onVariableToggle(category.id, id, active)}
                      onHover={onHoverVariableItem}
                      onLeave={onLeave}
                      updateDescription={(value) => setDetails(value)}
                      />
                  ))}
                </div>
              </div>
            ))}
            </div>
            {details.heading && 
            <div className="border-t-1 bg-zinc-700">
              <Card className="bg-transparent border-none">
                <CardContent className="flex gap-2 flex-col">
                  <div className="flex items-center">
                    <h4 className="font-semibold text-white text-xl">{details.heading}</h4>
                    <Info className="ml-2 text-muted-foreground" size={16} color="white"/>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {details.value}
                  </p>
                </CardContent>
              </Card>
              </div>
            }
          </div>
          
          {/* Co2 Distribution Info */}
          
          {/* Expandable Sections */}
          <div className="space-y-2">
            <Collapsible open={expandedSections.primary} onOpenChange={() => toggleSection('primary')}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="secondary"
                  className="flex items-center justify-between w-full h-auto p-3"
                >
                  <span>Primary Variables</span>
                  {expandedSections.primary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">Primary variable content would go here...</p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible open={expandedSections.secondary} onOpenChange={() => toggleSection('secondary')}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="secondary"
                  className="flex items-center justify-between w-full h-auto p-3"
                >
                  <span>Secondary Variables</span>
                  {expandedSections.secondary ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 p-3 bg-muted/50 rounded-md">
                <p className="text-sm text-muted-foreground">Secondary variable content would go here...</p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default EditVariablesComponent