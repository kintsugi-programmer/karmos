import Image from "next/image";
import Dash from "@/components/buttons/dash";
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
export default function Home() {
  return (
    <div className="flex flex-1 flex-col px-4 pb-4">
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
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex flex-col justify-center items-center">
  <div className="flex justify-center items-center pt-5">  {/* Ensure Dash is centered */}
    <Dash />

</div>


              </div>

   </div>
  );
}
