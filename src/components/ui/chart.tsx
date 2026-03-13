"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  };
};

export function ChartContainer({ children }: { children: React.ReactNode, config: ChartConfig, className?: string }) {
  return (
    <RechartsPrimitive.ResponsiveContainer>
      {children as any}
    </RechartsPrimitive.ResponsiveContainer>
  );
}

export const ChartTooltip = RechartsPrimitive.Tooltip;
export const ChartLegend = RechartsPrimitive.Legend;

export function ChartTooltipContent() { return null; }
export function ChartLegendContent() { return null; }
export function ChartStyle() { return null; }