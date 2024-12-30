import * as React from "react"


import { Button } from "@/components/ui/button"
import { House } from 'lucide-react';
import Link from "next/link";
export function HomeSwitch() {
  



  return (
    <Link href="/">
    <Button variant="outline" size="icon" className="rounded-full">
<House />
    </Button></Link>
  )
}
