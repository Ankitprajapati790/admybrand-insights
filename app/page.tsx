// File: /app/dashboard/page.tsx OR /pages/dashboard.tsx
"use client";

import { MetricCard } from "@/components/MetricCard";
import { LineChart, BarChartComp, PieChartComp } from "@/components/Charts";
import { DataTable } from "@/components/DataTable";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import AISummary from "@/components/AISummary";

export default function Dashboard() {
  return (
    <main className="p-6 space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">ADmyBRAND Insights</h1>
        <DarkModeToggle />
      </div>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Revenue" value="$25,320" growth="+12.5%" />
        <MetricCard title="Users" value="8,943" growth="+8.1%" />
        <MetricCard title="Conversions" value="1,254" growth="+3.7%" />
        <MetricCard title="Growth" value="28%" growth="+6.3%" />
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-card rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">Monthly Revenue</h2>
          <LineChart />
        </div>
        <div className="p-4 bg-card rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">User Acquisition</h2>
          <BarChartComp />
        </div>
        <div className="p-4 bg-card rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-2">Traffic Sources</h2>
          <PieChartComp />
        </div>
      </section>

      {/* AI Summary Section */}
      <section className="p-4 bg-muted rounded-xl shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">📊 AI-Powered Campaign Summary</h2>
        <AISummary />
      </section>

      {/* Data Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Campaign Performance</h2>
        <DataTable />
      </section>
    </main>
  );
}
