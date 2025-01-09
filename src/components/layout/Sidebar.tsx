"use client"
import { Home, Layout, TrendingUp, ChevronsUpDown, Settings, LogOut, User, Moon, Sun } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useState, useEffect } from "react"

const navigationItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Categories",
    url: "#",
    icon: Layout,
  },
  {
    title: "Popular",
    url: "#",
    icon: TrendingUp,
  },
]

const userActions = [
  {
    title: "Profile",
    icon: User,
    shortcut: "⌘P",
    url: "#profile"
  },
  {
    title: "Settings",
    icon: Settings,
    shortcut: "⌘S",
    url: "#settings"
  },
  {
    title: "Log out",
    icon: LogOut,
    shortcut: "⌘L",
    url: "#logout"
  },
]

export default function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Sidebar className="border-r">
      <SidebarContent>
        {/* Logo and Theme Switcher */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            height={32} 
            width={120} 
            className="opacity-85 hover:opacity-100 transition-colors" 
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-2 py-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 rounded-md
                      transition-colors
                      ${activeItem === item.title 
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-muted'
                      }
                    `}
                    onClick={() => setActiveItem(item.title)}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className={`
                        h-4 w-4
                        ${activeItem === item.title 
                          ? 'text-primary' 
                          : 'text-muted-foreground'
                        }
                      `} />
                      <span className={`
                        text-sm font-medium
                        ${activeItem === item.title 
                          ? 'text-primary' 
                          : 'text-muted-foreground'
                        }
                      `}>
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Coming Soon Section */}
        <div className="border-t p-4 mt-auto">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium">Coming Soon</span>
                  <span className="text-xs text-muted-foreground">User accounts</span>
                </div>
                <ChevronsUpDown className="h-4 w-4 text-muted-foreground ml-auto" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0" align="start">
              <Command>
                <CommandInput placeholder="Search actions..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {userActions.map((action) => (
                      <CommandItem
                        key={action.title}
                        className="flex items-center justify-between gap-2 px-2"
                      >
                        <div className="flex items-center gap-2">
                          <action.icon className="h-4 w-4 text-muted-foreground" />
                          <span>{action.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          {action.shortcut}
                        </span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}