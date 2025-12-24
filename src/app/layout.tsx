import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alika – Learning, Traveling, Cooking, Photography',
  description: 'Personal website & blog by Alika',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-50 antialiased dark:bg-gray-950">
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />

        {/* Konten halaman (Hero, About, dll) */}
        <main>{children}</main>

        {/* Footer nanti kita tambahin di sini juga */}
      </body>
    </html>
  )
}
