import EditVariablesComponent from "@/components/EditVariablesComponent";
import { chartData, variableCategories } from "@/data";
import { useRef, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis, type TooltipProps } from "recharts";
import type {
  VariableCategory,
  CustomChartProps,
} from "@/types.ts"

import CardComponent from "@/components/CardComponents";
import React from "react";
import { ChartTooltip } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { History, Sparkles, Upload, Zap } from "lucide-react";

// Tooltip component
function CustomTooltipContent(props: TooltipProps<any, any>) {
  // Type assertion to ensure payload and active are accessible
  const active = (props as any).active;
  const payload = (props as any).payload;
  if (!active || !payload || !payload.length) return null;

  const { value, unsatisfiedDemand } = payload[0].payload;

  return (
    <div className="rounded-sm border border-gray-700 bg-zinc-800 py-4 p-3 text-sm shadow-md text-white space-y-1">
      <span className="text-white text-xl">${(value/1000)+"k"}</span>
      <div>Unsatisfied Demand: <span className="text-yellow-400">{unsatisfiedDemand}%</span></div>
    </div>
  );
}

// CustomChart component
export const CustomChart = React.memo(function ({ data }: CustomChartProps) {

  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-full px-8" ref={chartRef}>
      {/* <ChartContainer config={chartConfig}> */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <ChartTooltip
              cursor={false}
              content={<CustomTooltipContent />}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="var(--chart-color)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      {/* </ChartContainer> */}
    </div>
  )
})

// Main Dashboard
const ChargingStationDashboard = () => {
  const [editVariablesOpen, setEditVariablesOpen] = useState(false);
  const [variables, setVariables] = useState<VariableCategory[]>(variableCategories);

  const handleVariableToggle = (categoryId: string, variableId: string, active: boolean) => {
    setVariables((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              variables: category.variables.map((v) =>
                v.id === variableId ? { ...v, active } : v
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="bg-zinc-900/50 text-white w-full rounded-xs">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white flex items-center">
              <span className=" mr-2"><Zap fill="white"/></span>
              Charging Station
            </h1>
            <div className="flex gap-4 ">
              <Button className="cursor-pointer" >
                <History size={20} className="text-white" />
              </Button>
              <Button 
                onClick={() => setEditVariablesOpen(true)}
                className="px-4 py-2 hover:bg-zinc-800 text-white rounded-xs text-sm"
                >
                Edit Variables
              </Button>
              <Button className="cursor-pointer" >
                <Upload />
              </Button>
            </div>
          </div>
          
          {/* Best Scenario Results */}
          <div className="mb-8">
            <div className="flex gap-2 items-center mb-4">
            <Sparkles fill="white" size={14}/>
            <h2 className="text-lg font-semibold text-green-400">
              Best Scenario Results
            </h2>
            </div>
            <div className="space-y-3">
              <div className="bg-zinc-800 border border-green-800 rounded-sm p-4">
                <p className="text-green-400 text-sm">
                  The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                </p>
              </div>
              <div className="bg-zinc-800 border border-green-800 rounded-sm p-4">
                <p className="text-green-400 text-sm">
                  The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6">
            {/* Chart Section */}
            <div className="col-span-1 2xl:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Graphs</h3>
              <div className="bg-zinc-800 rounded-sm px-10 py-8">
                <div className="mb-4">
                  <div className="flex items-center justify-end mb-2">
                    <select className="bg-zinc-800 border border-gray-600 rounded-xs px-2 py-1 text-sm text-white">
                      <option>Unsatisfied Demand %</option>
                    </select>
                  </div>
                </div>
                <CustomChart data={chartData} />
              </div>
            </div>
            <CardComponent />
          </div> 
        </div> 
      

      <EditVariablesComponent
        isOpen={editVariablesOpen}
        onClose={() => setEditVariablesOpen(false)}
        variables={variables}
        onVariableToggle={handleVariableToggle}
      />
    </div>
  )
};

export default ChargingStationDashboard;
