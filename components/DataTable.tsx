"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Campaign {
  id: number
  name: string
  impressions: number
  clicks: number
  ctr: number
}

const mockData: Campaign[] = [
  { id: 1, name: "Summer Sale", impressions: 12000, clicks: 1450, ctr: 12.1 },
  { id: 2, name: "Black Friday", impressions: 30000, clicks: 5200, ctr: 17.3 },
  { id: 3, name: "Email Boost", impressions: 8500, clicks: 900, ctr: 10.5 },
  { id: 4, name: "Brand Awareness", impressions: 20000, clicks: 2800, ctr: 14.0 },
  { id: 5, name: "Retargeting Ads", impressions: 18000, clicks: 2250, ctr: 12.5 },
  { id: 6, name: "Holiday Push", impressions: 9500, clicks: 1100, ctr: 11.6 },
  { id: 7, name: "YouTube Shorts", impressions: 16000, clicks: 1900, ctr: 11.9 },
  { id: 8, name: "Referral Blitz", impressions: 13000, clicks: 1450, ctr: 11.2 },
]

export function DataTable() {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const itemsPerPage = 5

  const filtered = mockData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paginated = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search campaigns..."
        className="max-w-sm"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setPage(1)
        }}
      />

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableCaption>A list of active marketing campaigns.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Impressions</TableHead>
              <TableHead>Clicks</TableHead>
              <TableHead>CTR (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length > 0 ? (
              paginated.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.impressions.toLocaleString()}</TableCell>
                  <TableCell>{item.clicks.toLocaleString()}</TableCell>
                  <TableCell>{item.ctr.toFixed(1)}%</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  No campaigns found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Page {page} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
