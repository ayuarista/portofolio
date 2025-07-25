// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { CodeIcon, RocketIcon, EnvelopeClosedIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    id: 1,
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    url: "#",
    icon: PersonIcon,
    title: "About"
  },
  {
    id: 3,
    url: "#",
    icon: RocketIcon,
    title: "Experience"
  },
  {
    id: 4,
    url: "#",
    icon: CodeIcon,
    title: "Projects"
  },
  {
    id: 5,
    url: "#",
    icon: EnvelopeClosedIcon,
    title: "Contact",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="block lg:hidden">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}