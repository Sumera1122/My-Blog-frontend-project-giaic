
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignIn,
  // SignInButton,
  SignedIn,
  SignedOut,
  // UserButton
} from '@clerk/nextjs'
import Navbar from "./components/navbar/page";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="light">
        <body>
        <SignedOut>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <SignIn/>
            </div>
        
          </SignedOut>

          <SignedIn>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className=" min-h-screen">
            <div className=" max-h-[1536px] ml-[150px] mr-[150px] pl-[80px] pr-[80px] max-sm:ml-4 max-sm:mr-4 max-sm:pr-4 max-sm:pl-4  sm:pl-8 sm:pr-8 sm:mr-8 sm:ml-8">
            
          <Navbar/>
          {children}
          <Footer/>
           </div>
           </div>
          </ThemeProvider>
            {/* <UserButton /> */}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  )
}
