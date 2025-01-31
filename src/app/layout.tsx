import Loading from "./loading";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700">
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="flex-grow"> <Suspense fallback ={<Loading/>}> {children}</Suspense></main>
        <Suspense fallback ={<Loading/>}> {children}</Suspense>
        <Footer/></div>
      </body>
    </html>
  )
}
