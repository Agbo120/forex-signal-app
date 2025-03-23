"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, ChevronDown, LogOut, Menu, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SignalTable } from "@/components/signal-table"
import { SignalDetailsDialog } from "@/components/signal-details-dialog"

export default function DashboardPage() {
  const [selectedSignal, setSelectedSignal] = useState<any | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-lg font-semibold text-primary"
                prefetch={false}
              >
                <span>ForexSignals</span>
              </Link>
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <span>Dashboard</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-2 text-lg font-semibold"
                prefetch={false}
              >
                <span>Settings</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="hidden items-center gap-2 text-lg font-semibold md:flex" prefetch={false}>
          <span>ForexSignals</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/dashboard" className="text-foreground transition-colors hover:text-foreground" prefetch={false}>
            Dashboard
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-primary text-[0.625rem] font-medium text-primary-foreground">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold text-lg md:text-2xl">Trading Signals</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto gap-1">
                All Signals <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Signals</DropdownMenuItem>
              <DropdownMenuItem>Forex Only</DropdownMenuItem>
              <DropdownMenuItem>Synthetic Indices</DropdownMenuItem>
              <DropdownMenuItem>Commodities</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border shadow-sm rounded-lg">
          <SignalTable onSignalClick={setSelectedSignal} />
        </div>
      </main>
      {selectedSignal && (
        <SignalDetailsDialog signal={selectedSignal} open={!!selectedSignal} onClose={() => setSelectedSignal(null)} />
      )}
    </div>
  )
}

