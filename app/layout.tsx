"use client"

import { Afacad } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


const afacad = Afacad({ subsets: ['latin'], weight: ['400'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
