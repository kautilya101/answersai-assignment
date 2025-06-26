import { Card, CardContent } from "@/components/ui/card";
import { kpis } from "@/data";
import { HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const CardComponent = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
      <div className="flex 2xl:grid 2xl:grid-cols-2  gap-4">
        {kpis.map((item) => (
          <Card key={item.heading} className="bg-zinc-800 text-white border-none rounded-sm py-7">
            <CardContent className="flex flex-1 flex-col">
              <div className="flex justify-between flex-1">
              <div className="flex flex-col gap-2 max-w-42">
                <div className="text-base font-semibold">{item.heading}</div>
                <div className="text-xs flex-wrap">{item.description}</div>
              </div>
              <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle size={16} className="mt-1 cursor-pointer text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      More info about {item.heading}
                    </TooltipContent>
                  </Tooltip>
              </div>
              <div className="flex justify-end text-2xl font-bold pt-10">{item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


export default CardComponent