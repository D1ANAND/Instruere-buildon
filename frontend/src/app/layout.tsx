// import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { PropsWithChildren } from "react";
import { ClerkProvider } from '@clerk/nextjs';
import Logo from './components/Logo';
import Providers from "./components/Providers";



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Aptos Wallet Adapter Example",
  description: "An example of how to use Aptos Wallet Adapter with React and Next.js.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex justify-center min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ClerkProvider>
            <Providers> 
                <Logo />
                {children}
                <Toaster />
                </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
