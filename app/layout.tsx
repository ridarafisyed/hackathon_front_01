import "@/styles/globals.css"
import { Metadata } from "next"
import { StateContextProvider } from "@/context/StateContext"
import { Toast, Toaster } from "react-hot-toast"
// import {ClerkProvider} from '@clerk/clerk-js'
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>

      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <StateContextProvider>
            
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Toaster />
              <main className="relative flex min-h-screen flex-col gap-5">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <Footer />
              </main>
              <TailwindIndicator />
            </ThemeProvider>
           
          </StateContextProvider>
        </body>
      </html> 

    </>
  )
}
