"use client"

import type React from "react"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function EditSignalDialog({
  signal,
  open,
  onClose,
}: {
  signal: any
  open: boolean
  onClose: () => void
}) {
  const [formData, setFormData] = useState({
    asset: "",
    direction: "",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    riskLevel: "",
    analysis: "",
  })

  useEffect(() => {
    if (signal) {
      setFormData({
        asset: signal.asset || "",
        direction: signal.direction || "",
        entryPrice: signal.entryPrice || "",
        stopLoss: signal.stopLoss || "",
        takeProfit: signal.takeProfit || "",
        riskLevel: signal.riskLevel || "",
        analysis:
          "Price has broken above a key resistance level with increased volume. The RSI is showing bullish momentum, and the MACD has recently crossed above the signal line.",
      })
    }
  }, [signal])

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log("Form submitted:", formData)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Trading Signal</DialogTitle>
            <DialogDescription>Update the details for this trading signal.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="asset">Asset</Label>
                <Input
                  id="asset"
                  placeholder="EUR/USD"
                  value={formData.asset}
                  onChange={(e) => handleChange("asset", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="direction">Direction</Label>
                <Select value={formData.direction} onValueChange={(value) => handleChange("direction", value)} required>
                  <SelectTrigger id="direction">
                    <SelectValue placeholder="Select direction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Buy">Buy</SelectItem>
                    <SelectItem value="Sell">Sell</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="entryPrice">Entry Price</Label>
                <Input
                  id="entryPrice"
                  placeholder="1.0865"
                  value={formData.entryPrice}
                  onChange={(e) => handleChange("entryPrice", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stopLoss">Stop Loss</Label>
                <Input
                  id="stopLoss"
                  placeholder="1.0830"
                  value={formData.stopLoss}
                  onChange={(e) => handleChange("stopLoss", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="takeProfit">Take Profit</Label>
                <Input
                  id="takeProfit"
                  placeholder="1.0920"
                  value={formData.takeProfit}
                  onChange={(e) => handleChange("takeProfit", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="riskLevel">Risk Level</Label>
              <Select value={formData.riskLevel} onValueChange={(value) => handleChange("riskLevel", value)} required>
                <SelectTrigger id="riskLevel">
                  <SelectValue placeholder="Select risk level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="analysis">Analysis</Label>
              <Textarea
                id="analysis"
                placeholder="Provide detailed market analysis and reasoning for this signal..."
                className="min-h-[100px]"
                value={formData.analysis}
                onChange={(e) => handleChange("analysis", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chart">Chart Image</Label>
              <div className="flex items-center gap-4">
                <div className="h-20 w-40 bg-muted rounded-md overflow-hidden">
                  <img
                    src="/placeholder.svg?height=80&width=160"
                    alt="Current chart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input id="chart" type="file" accept="image/*" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Update Signal</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

