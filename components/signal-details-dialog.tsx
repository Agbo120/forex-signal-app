"use client"

import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function SignalDetailsDialog({
  signal,
  open,
  onClose,
}: {
  signal: any
  open: boolean
  onClose: () => void
}) {
  if (!signal) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span>Signal Details: {signal.asset}</span>
            <Badge variant={signal.direction === "Buy" ? "default" : "destructive"}>{signal.direction}</Badge>
          </DialogTitle>
          <DialogDescription>Signal generated on {new Date(signal.timestamp).toLocaleString()}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Entry Details</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Direction</span>
                  <span className="font-medium">{signal.direction}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Entry Price</span>
                  <span className="font-medium">{signal.entryPrice}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Stop Loss</span>
                  <span className="font-medium">{signal.stopLoss}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Take Profit</span>
                  <span className="font-medium">{signal.takeProfit}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Risk Level</span>
                  <Badge
                    variant={
                      signal.riskLevel === "Low"
                        ? "outline"
                        : signal.riskLevel === "Medium"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {signal.riskLevel}
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Risk Analysis</h3>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Risk/Reward Ratio</span>
                  <span className="font-medium">1:2.5</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Recommended Position Size</span>
                  <span className="font-medium">2% of account</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Potential Profit</span>
                  <span className="font-medium text-green-600">+55 pips</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Potential Loss</span>
                  <span className="font-medium text-red-600">-35 pips</span>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-medium mb-4">Market Analysis</h3>
            <div className="aspect-video w-full bg-muted rounded-md overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Chart Analysis"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Technical Analysis</h4>
              <p className="text-sm text-muted-foreground">
                Price has broken above a key resistance level at 1.0850 with increased volume. The RSI is showing
                bullish momentum at 65, and the MACD has recently crossed above the signal line. The 50 EMA has crossed
                above the 200 EMA, forming a golden cross pattern.
              </p>
              <h4 className="font-medium">Fundamental Factors</h4>
              <p className="text-sm text-muted-foreground">
                Recent economic data from the Eurozone has exceeded expectations, particularly in manufacturing PMI and
                inflation figures. The ECB's hawkish stance in recent communications suggests potential rate stability,
                while the Fed is expected to begin cutting rates in the coming months.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={onClose}>
              <X className="mr-2 h-4 w-4" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

