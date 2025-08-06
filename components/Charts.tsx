"use client"

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

export const lineData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 4200 },
  { month: "Mar", value: 4600 },
  { month: "Apr", value: 5000 },
  { month: "May", value: 5400 },
  { month: "Jun", value: 5800 },
]

export const barData = [
  { name: "Google", users: 2400 },
  { name: "Facebook", users: 1398 },
  { name: "Instagram", users: 9800 },
  { name: "LinkedIn", users: 3908 },
]

const pieData = [
  { name: "Organic", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 300 },
  { name: "Email", value: 200 },
]

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"]

// Line Chart
export function LineChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ReLineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </ReLineChart>
    </ResponsiveContainer>
  )
}

// Bar Chart
export function BarChartComp() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

// Pie Chart
export function PieChartComp() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
