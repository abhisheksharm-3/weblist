"use client"
import { Home, Layout, TrendingUp, ChevronsUpDown, Settings, LogOut, User, Moon, Sun } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
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
  const [activeItem, setActiveItem] = useState("Overview")
  const [open, setOpen] = useState(false)
  const [isHovered, setIsHovered] = useState("")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Sidebar className="bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-2xl border-r border-border/40 shadow-lg shadow-background/5">
      <SidebarContent className="flex flex-col h-full">
        {/* Logo and Theme Switcher */}
        <div className="px-8 py-6 border-b border-border/40 flex justify-between items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            height={32} 
            width={120} 
            className="opacity-85 hover:opacity-100 transition-all duration-300 transform hover:scale-105" 
          />
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-muted/80 transition-all duration-300"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-500 hover:rotate-90 transition-all duration-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700 hover:-rotate-90 transition-all duration-500" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <SidebarGroup className="flex-1 px-4 py-6">
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem 
                  key={item.title}
                  className="px-2 py-1.5"
                >
                  <SidebarMenuButton
                    asChild
                    className={`
                      group relative flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-300 ease-out
                      ${activeItem === item.title 
                        ? 'bg-primary/15 text-primary shadow-lg shadow-primary/10' 
                        : 'hover:bg-muted/80 hover:shadow-sm hover:translate-x-1'
                      }
                    `}
                    onClick={() => setActiveItem(item.title)}
                    onMouseEnter={() => setIsHovered(item.title)}
                    onMouseLeave={() => setIsHovered("")}
                  >
                    <a href={item.url} className="flex items-center gap-4 w-full">
                      <item.icon className={`
                        h-5 w-5 transition-all duration-300
                        ${activeItem === item.title 
                          ? 'text-primary scale-110' 
                          : 'text-muted-foreground group-hover:text-foreground'
                        }
                        ${isHovered === item.title ? 'scale-115 rotate-3' : ''}
                      `} />
                      <span className={`
                        text-sm font-medium transition-all duration-300
                        ${activeItem === item.title 
                          ? 'text-primary translate-x-0.5' 
                          : 'text-muted-foreground group-hover:text-foreground'
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

        {/* User Profile */}
        <div className="border-t border-border/40 p-6 bg-muted/30 backdrop-blur-xl">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <button
                className="flex items-center gap-4 w-full rounded-xl p-3 hover:bg-muted/80 transition-all duration-300 group hover:shadow-md"
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary/80 via-primary to-primary-foreground/90 flex items-center justify-center text-primary-foreground font-medium shadow-lg shadow-primary/20 ring-2 ring-border/5 group-hover:shadow-primary/30 transition-all duration-300">
                    JD
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background shadow-sm animate-pulse"></div>
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-medium group-hover:text-primary transition-all duration-300">John Doe</span>
                    <span className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-all duration-300">john@example.com</span>
                  </div>
                  <ChevronsUpDown className={`h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-500 transform ${open ? 'rotate-180' : ''}`} />
                </div>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-0 rounded-xl shadow-xl shadow-primary/5" align="start">
              <Command className="rounded-xl">
                <CommandInput placeholder="Search actions..." className="h-11" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {userActions.map((action) => (
                      <CommandItem
                        key={action.title}
                        onSelect={() => {
                          window.location.href = action.url
                          setOpen(false)
                        }}
                        className="flex items-center justify-between px-4 py-3 hover:bg-muted/80 cursor-pointer transition-all duration-300 hover:translate-x-1"
                      >
                        <div className="flex items-center gap-3">
                          <action.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{action.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded-md">{action.shortcut}</span>
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