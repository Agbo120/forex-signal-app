"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"

  const planDetails = {
    basic: {
      name: "Basic Plan",
      price: "$29",
      description: "Essential signals for active traders",
    },
    premium: {
      name: "Premium Plan",
      price: "$99",
      description: "Advanced signals for professional traders",
    },
  }

  const selectedPlan = plan === "premium" ? planDetails.premium : planDetails.basic

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted p-4 md:p-8">
      <Link
        href="/pricing"
        className="mb-8 flex items-center text-sm font-medium text-muted-foreground hover:underline"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to pricing
      </Link>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 grid gap-6 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>Review your order details</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{selectedPlan.name}</p>
                  <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                </div>
                <p className="font-medium">{selectedPlan.price}/month</p>
              </div>
              <Separator />
              <div className="flex items-center justify-between font-medium">
                <p>Total</p>
                <p>{selectedPlan.price}/month</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>Choose how you want to pay</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <RadioGroup defaultValue="card" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <RadioGroupItem value="card" id="card" className="peer sr-only" />
                  <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <CreditCard className="mb-3 h-6 w-6" />
                    Credit/Debit Card
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
                  <Label
                    htmlFor="paypal"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-3 h-6 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                      <path d="M8.93 13H5.5a2.5 2.5 0 0 0 0 5H9" />
                      <path d="M11 16v4" />
                      <path d="M15 16v4" />
                      <path d="M15 13v-2.5a2.5 2.5 0 0 0-5 0V13" />
                      <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H16" />
                    </svg>
                    PayPal
                  </Label>
                </div>
              </RadioGroup>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name on card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="card-number">Card number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">Expiry date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

