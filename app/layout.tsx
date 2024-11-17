'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

//header and sidebar

import { Toaster } from 'react-hot-toast'
import { Sidebar } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode 
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false) 
  const [totalEarnings, setTotalEarnings] = useState(0) 

  return (
    <html lang='en'>
      < body className={inter.className}>
        <div className='min-h-screen bg-gray-50 flex flex-col'>
          {/* header*/}
             <div className='flex flex-1'>
              {/*Sidebar*/}
              <main className='flex-1 p-4 lg:p-8 ml-64 transition-all duration-300'>
               {children}

              </main>

             </div>

        </div>
        <Toaster/>

      </body>


    </html>
  )
}