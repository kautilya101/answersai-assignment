// Individual variable
export interface Variable {
  id: string;
  name: string;
  active: boolean;
  description: string;
}

// Group of variables
export interface VariableCategory {
  id: string
  name: string;
  variables: Variable[];
}

// Props for EditVariablesComponent
export interface EditVariablesComponentProps {
  isOpen: boolean;
  onClose: () => void;
  variables: VariableCategory[];
  onVariableToggle: (categoryId: string , variableId: string, active: boolean) => void;
}

// Props for individual VariableItem
export interface VariableItemProps {
  variable: Variable;
  onToggle: (id: string, active: boolean) => void;
  onHover: (variable: Variable) => void;
  onLeave: () => void;
  updateDescription: (desc: { heading: string; value: string }) => void
}

// Chart Data Point
export interface ChartDataPoint {
  month: string;
  value: number;
  unsatisfiedDemand: number;
}

// Props for custom chart
export interface CustomChartProps {
  data: ChartDataPoint[];
  onDataPointHover?: (point: ChartDataPoint) => void;
}

// Props for tooltip
export interface DataPointTooltipProps {
  active: boolean;
  payload?: { payload: ChartDataPoint }[];
  label: string;
  position: { x: number; y: number };
}
