"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, LogOut, Menu, Plus, Settings, User } from "lucide-react"

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
import { AdminSignalTable } from "@/components/admin-signal-table"
import { AddSignalDialog } from "@/components/add-signal-dialog"
import { EditSignalDialog } from "@/components/edit-signal-dialog"

export default function AdminPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editSignal, setEditSignal] = useState<any | null>(null)

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
                href="/admin"
                className="flex items-center gap-2 text-lg font-semibold text-primary"
                prefetch={false}
              >
                <span>ForexSignals Admin</span>
              </Link>
              <Link href="/admin" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <span>Dashboard</span>
              </Link>
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <span>User View</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/admin" className="hidden items-center gap-2 text-lg font-semibold md:flex" prefetch={false}>
          <span>ForexSignals Admin</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="/admin" className="text-foreground transition-colors hover:text-foreground" prefetch={false}>
            Dashboard
          </Link>
          <Link
            href="/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            User View
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
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
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg md:text-2xl">Manage Trading Signals</h1>
          <Button onClick={() => setIsAddDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add Signal
          </Button>
        </div>
        <div className="border shadow-sm rounded-lg">
          <AdminSignalTable onEdit={setEditSignal} />
        </div>
      </main>
      <AddSignalDialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} />
      {editSignal && <EditSignalDialog signal={editSignal} open={!!editSignal} onClose={() => setEditSignal(null)} />}
    </div>
  )
}

