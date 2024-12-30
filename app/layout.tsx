import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/components/Nav";
import Footer from "@/components/Foot";
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"
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
  SidebarTrigger,
} from "@/components/ui/sidebar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KarmOS - Distraction-Free Learning",
  description: "KarmOS provides a distraction-free environment, free from Brainrots, advertisements, and attention-grabbing bots. Focus solely on learning with uninterrupted access to lectures, tutorials, and documentation.",
  keywords: "distraction-free, learning, focus, educational platform, tutorials, lectures, documentation",
  authors: [{ name: "Siddhant Bali", url: "https://sbali.vercel.app/" }],
  themeColor: [
      { media: "(prefers-color-scheme: dark)", color: "#333333" },
      { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],
};

export const manifest = {
  name: "KarmOS",
  short_name: "KarmOS",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        
        
        <Navbar/>
        <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
  
        {children}
        
        </SidebarInset>
    </SidebarProvider>
        {/* <Footer/> */}
      
      
      
        </ThemeProvider>
      </body>
    </html>
  );
}
