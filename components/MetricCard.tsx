// components/MetricCard.tsx

import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string
  growth: string
}

export function MetricCard({ title, value, growth }: MetricCardProps) {
  return (
    <Card className="transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-green-600 mt-2">{growth}</p>
      </CardContent>
    </Card>
  )
}
