"use client"

import Link from "next/link"
import { Bell, LogOut, Menu, Settings, User } from "lucide-react"

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
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
          <Link
            href="/dashboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/settings"
            className="text-foreground transition-colors hover:text-foreground"
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
        <div className="flex items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Settings</h1>
        </div>
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how you want to receive trading signals and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Signal Notifications</h3>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="email-notifications" className="font-normal">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive signals via email</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="push-notifications" className="font-normal">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive signals via browser notifications</p>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="sms-notifications" className="font-normal">
                        SMS Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive signals via SMS (Premium only)</p>
                    </div>
                    <Switch id="sms-notifications" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Market Updates</h3>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="daily-digest" className="font-normal">
                        Daily Digest
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive a daily summary of market movements</p>
                    </div>
                    <Switch id="daily-digest" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="weekly-report" className="font-normal">
                        Weekly Report
                      </Label>
                      <p className="text-sm text-muted-foreground">Receive a weekly analysis report</p>
                    </div>
                    <Switch id="weekly-report" defaultChecked />
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account details and subscription</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Subscription</h3>
                  <div className="rounded-md border p-4">
                    <div className="flex flex-col space-y-1">
                      <p className="font-medium">Current Plan: Basic</p>
                      <p className="text-sm text-muted-foreground">Your subscription renews on April 15, 2024</p>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm">
                        Upgrade Plan
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Account Security</h3>
                  <div className="flex items-center justify-between space-y-2">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="two-factor" className="font-normal">
                        Two-Factor Authentication
                      </Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Danger Zone</h3>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

