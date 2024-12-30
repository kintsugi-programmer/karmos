import { HoverEffect } from "@/components/ui/card-hover-effect";
 
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,} from "@/components/ui/sidebar"  
export default function Page() {
  return (
<div className="flex flex-1 flex-col  px-4 pb-4 ">
<div className="flex items-center gap-2  py-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
            <Link href="/dashboard" >
              <BreadcrumbPage >Dashboard</BreadcrumbPage></Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
          <HoverEffect items={WarGames} />
        </div></div>
  );
}
export const WarGames = [
  {
    title: "100xDev",
    description:
      "A technology company that builds economic infrastructure for the internet. Includes learning paths for web development, DevOps, Web3, and more.",
    link: "/dashboard/tuts/100xdev-app",
  },
  {
    title: "Mobile Computing",
    description:
      "Learn the fundamentals of mobile computing, with tutorials on Java, OOPs, and Android Studio for building mobile applications.",
    link: "/dashboard/tuts/mobile-computing",
  },
  {
    title: "Found. of CyberSec",
    description:
      "Foundations of Cyber Security, featuring courses on security protocols, defense techniques, and the core principles of protecting digital assets.",
    link: "/dashboard/tuts/foundations-cyber-security",
  },
  {
    title: "OTW Wargames",
    description:
      "A collection of wargames focused on cybersecurity challenges, including Bandit and other hacking exercises to improve your security skills.",
    link: "/dashboard/tuts/otw-wargames",
  },
  {
    title: "CP31",
    description:
      "Competitive Programming course designed to help you master coding challenges, featuring tutorials, problem sets, and tips for success in coding competitions.",
    link: "/dashboard/tuts/cp",
  },
  {
    title: "DS&A",
    description:
      "Master Data Structures and Algorithms with tutorials, problem-solving exercises, and comprehensive guides to improve your coding skills.",
    link: "/dashboard/tuts/dsa",
  },
  {
    title: "Bhakti",
    description:
      "Explore devotional content, including spiritual songs, prayers, and teachings from holy texts, designed to guide you in your spiritual journey.",
    link: "/dashboard/tuts/Haiku",
  },
  {
    title: "Albums",
    description:
      "A collection of musical albums covering a wide range of genres and themes, from Haiku to modern creations like The Millennials Folklore.",
    link: "/dashboard/tuts/Haiku",
  },
  {
    title: "Others",
    description:
      "Explore various self-improvement resources, including typing lessons, personal development tools, and other educational materials.",
    link: "/dashboard/tuts/typing",
  },
];
