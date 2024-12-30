"use client"
import { Switch } from "./toggle-dark"
import { HomeSwitch } from "./buttons/home"
import * as React from "react"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"
import { Mails } from 'lucide-react';
import { Github } from 'lucide-react';

import { GraduationCap } from 'lucide-react';
import { BotMessageSquare } from 'lucide-react';
import { BrainCog } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { Cog } from 'lucide-react';
import { TabletSmartphone } from 'lucide-react';
import { NavMain } from "@/components/nav-main"
import { ChartSpline } from 'lucide-react';
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { Swords } from 'lucide-react';
import { Database } from 'lucide-react';
import { PanelsTopLeft } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Mobile Computing",
      url: "#",
      icon: TabletSmartphone,
      isActive: true,
      items: [
        {
          title: "Java",
          url: "/dashboard/tuts/java",
        },
        {
          title: "OOPs",
          url: "/dashboard/tuts/oops",
        },
        {
          title: "Android Studio",
          url: "/dashboard/tuts/android-java",
        },
        {
          title: "Mobile Computing",
          url: "/dashboard/tuts/mobile-computing",
        },
      ],
    },
    {
      title: "Found. of CyberSec",
      url: "/dashboard/tuts/foundations-cyber-security",
      icon: ShieldCheck,
      items: [
        {
          title: "FCS Course",
          url: "/dashboard/tuts/foundations-cyber-security",
        },
      ],
    },
   
    {
      title: "OTW Wargames",
      url: "/dashboard/tuts/otw-wargames",
      icon: Swords,
      items: [
        {
          title: "Bandit",
          url: "/dashboard/tuts/otw-wargames-bandit",
        },
        {
          title: "Bandit Tuts",
          url: "/dashboard/tuts/otw-bandit",
        },
        {
          title: "Other Wargames",
          url: "/dashboard/tuts/otw-wargames",
        },

      ],
    },
    {
      title: "100xDevs",
      url: "/dashboard/tuts/100xdev-app",
      icon: PanelsTopLeft,
      items: [
        {
          title: "FullStack WebDev",
          url: "/dashboard/tuts/webdev",
        },
        {
          title: "DevOps",
          url: "/dashboard/tuts/devops",
        },
        {
          title: "Web3",
          url: "/dashboard/tuts/web3",
        },
        {
          title: "Assignments",
          url: "/dashboard/tuts/100xdev-ass",
        },
        {
          title: "Projects",
          url: "/dashboard/tuts/100xdev-proj",
        },
        {
          title: "App",
          url: "/dashboard/tuts/100xdev-app",
        },
        {
          title: "Syllabus",
          url: "/dashboard/tuts/100xdev-syll",
        },
        {
          title: "Github",
          url: "/dashboard/tuts/code100x",
        },


      ],
    },
    {
      title: "CP31",
      url: "/dashboard/tuts/cp",
      icon: ChartSpline,
      items: [
        {
          title: "Codeforces",
          url: "/dashboard/tuts/cp",
        },
        {
          title: "Tutorials",
          url: "/dashboard/tuts/cp31-tuts",
        },
        {
          title: "CP31 Sheet",
          url: "/dashboard/tuts/cp31",
        },
        {
          title: "800 Tuts",
          url: "/dashboard/tuts/cp31-800",
        },
       

      ],
    },
    {
      title: "DS&A",
      url: "/dashboard/tuts/dsa",
      icon: BookOpen,
      items: [
        {
          title: "A2Z Sheet",
          url: "/dashboard/tuts/dsa-a2z",
        },
        {
          title: "Tutorials",
          url: "/dashboard/tuts/dsa",
        },
        {
          title: "CP31 Sheet",
          url: "/dashboard/tuts/cp31",
        },
        {
          title: "800 Tuts",
          url: "/dashboard/tuts/cp31-800",
        },
       

      ],
    },
    {
      title: "Others",
      url: "/dashboard/tuts/typing",
      icon: Cog,
      items: [
        {
          title: "Touch Typing",
          url: "/dashboard/tuts/typing",
        }

       

      ],
    },
  ],


  navSecondary: [
    {
      title: "Chatgpt",
      url: "https://chatgpt.com/",
      icon: Bot,
    },
    {
      title: "Claude",
      url: "https://claude.ai/",
      icon: BotMessageSquare,
    },
    {
      title: "Google Classroom",
      url: "https://classroom.google.com/",
      icon: GraduationCap,
    },
    {
      title: "Gmail",
      url: "https://mail.google.com/mail/u/0/#inbox",
      icon: Mails,
    },
    {
      title: "Github",
      url: "https://github.com/kintsugi-programmer",
      icon: Github,
    },
  ],


  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}



// const data = {
//   user: {
//     name: "shadcn",
//     email: "m@example.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Models",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "Genesis",
//           url: "#",
//         },
//         {
//           title: "Explorer",
//           url: "#",
//         },
//         {
//           title: "Quantum",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Documentation",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Introduction",
//           url: "#",
//         },
//         {
//           title: "Get Started",
//           url: "#",
//         },
//         {
//           title: "Tutorials",
//           url: "#",
//         },
//         {
//           title: "Changelog",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "General",
//           url: "#",
//         },
//         {
//           title: "Team",
//           url: "#",
//         },
//         {
//           title: "Billing",
//           url: "#",
//         },
//         {
//           title: "Limits",
//           url: "#",
//         },
//       ],
//     },
//   ],
//   navSecondary: [
//     {
//       title: "Support",
//       url: "#",
//       icon: LifeBuoy,
//     },
//     {
//       title: "Feedback",
//       url: "#",
//       icon: Send,
//     },
//   ],
//   projects: [
//     {
//       name: "Design Engineering",
//       url: "#",
//       icon: Frame,
//     },
//     {
//       name: "Sales & Marketing",
//       url: "#",
//       icon: PieChart,
//     },
//     {
//       name: "Travel",
//       url: "#",
//       icon: Map,
//     },
//   ],
// }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
         
            <SidebarMenuButton size="lg" asChild>
              <div>
              <Switch/>
              <HomeSwitch/>
              </div>
              

              {/* <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}
