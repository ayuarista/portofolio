'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  CodeIcon,
  RocketIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import { ModeToggle } from './mode-toggle'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const items = [
  {
    id: 'home',
    title: 'Home',
    url: '/#home',
    icon: HomeIcon,
  },
  {
    id: 'about-me',
    title: 'About',
    url: '/#about-me',
    icon: PersonIcon,
  },
  {
    id: 'experience',
    title: 'Experience',
    url: '/#experience',
    icon: RocketIcon,
  },
  {
    id: 'projects',
    title: 'Projects',
    url: '/#projects',
    icon: CodeIcon,
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/#contact',
    icon: EnvelopeClosedIcon,
  },
]

export function AppSidebar() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveId(id)
          }
        }
      },
      {
        threshold: 0.5,
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <ModeToggle />
              </SidebarMenuItem>

              {items.map((item) => {
                const isActive = item.id === activeId

                return (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      asChild
                      className={isActive ? 'bg-primary text-white dark:bg-accent hover:bg-primary hover:text-white font-semibold' : ''}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span className="block lg:hidden">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
