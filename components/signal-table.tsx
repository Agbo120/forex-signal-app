"use client"

import { ArrowUpDown, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample data for demonstration
const signals = [
  {
    id: "1",
    asset: "EUR/USD",
    entryPrice: "1.0865",
    stopLoss: "1.0830",
    takeProfit: "1.0920",
    riskLevel: "Medium",
    timestamp: "2024-03-21T10:30:00Z",
    direction: "Buy",
  },
  {
    id: "2",
    asset: "GBP/JPY",
    entryPrice: "186.50",
    stopLoss: "185.80",
    takeProfit: "187.90",
    riskLevel: "High",
    timestamp: "2024-03-21T09:15:00Z",
    direction: "Sell",
  },
  {
    id: "3",
    asset: "USD/CAD",
    entryPrice: "1.3620",
    stopLoss: "1.3650",
    takeProfit: "1.3560",
    riskLevel: "Low",
    timestamp: "2024-03-21T08:45:00Z",
    direction: "Sell",
  },
  {
    id: "4",
    asset: "XAU/USD",
    entryPrice: "2180.50",
    stopLoss: "2170.00",
    takeProfit: "2200.00",
    riskLevel: "Medium",
    timestamp: "2024-03-21T07:30:00Z",
    direction: "Buy",
  },
  {
    id: "5",
    asset: "Boom 1000",
    entryPrice: "9850.45",
    stopLoss: "9830.20",
    takeProfit: "9890.75",
    riskLevel: "High",
    timestamp: "2024-03-21T06:15:00Z",
    direction: "Buy",
  },
]

export function SignalTable({ onSignalClick }: { onSignalClick: (signal: any) => void }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Button variant="ghost" className="p-0 hover:bg-transparent">
              <span>Asset</span>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead>Direction</TableHead>
          <TableHead>Entry Price</TableHead>
          <TableHead>Stop Loss</TableHead>
          <TableHead>Take Profit</TableHead>
          <TableHead>Risk Level</TableHead>
          <TableHead>
            <Button variant="ghost" className="p-0 hover:bg-transparent">
              <span>Timestamp</span>
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          </TableHead>
          <TableHead className="text-right">Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {signals.map((signal) => (
          <TableRow key={signal.id}>
            <TableCell className="font-medium">{signal.asset}</TableCell>
            <TableCell>
              <Badge variant={signal.direction === "Buy" ? "default" : "destructive"}>{signal.direction}</Badge>
            </TableCell>
            <TableCell>{signal.entryPrice}</TableCell>
            <TableCell>{signal.stopLoss}</TableCell>
            <TableCell>{signal.takeProfit}</TableCell>
            <TableCell>
              <Badge
                variant={
                  signal.riskLevel === "Low" ? "outline" : signal.riskLevel === "Medium" ? "secondary" : "destructive"
                }
              >
                {signal.riskLevel}
              </Badge>
            </TableCell>
            <TableCell>{new Date(signal.timestamp).toLocaleString()}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" onClick={() => onSignalClick(signal)}>
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">View details</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

