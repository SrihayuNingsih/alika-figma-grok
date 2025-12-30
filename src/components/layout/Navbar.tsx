'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Facebook } from 'lucide-react'
import { cn } from '@/lib/cn'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTopOrSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Desktop + Mobile Navbar – DIPERBAIKI: z-[60] biar di atas Hero overlay */}
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-[60] transition-all duration-300', // ← z-[60] penting!
          isScrolled
            ? 'bg-white/50 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <nav
          className={cn(
            'relative container mx-auto px-6', // ← px-6 biar lebih aman di mobile
            isScrolled ? 'h-16' : 'h-20 md:h-24'
          )}
        >
          <div className="flex h-full items-center justify-between">
            {/* Logo – DIPERBAIKI: hilangkan border/outline */}
            <div className="absolute top-1/2 left-6 -translate-y-1/2">
              <button
                onClick={() => scrollToTopOrSection('home')}
                className={cn(
                  'flex cursor-pointer items-center gap-1 rounded-lg ring-0 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50',
                  'text-2xl sm:text-3xl md:text-4xl',
                  'max-sm:text-xl',
                  'max-sm:isScrolled:text-lg',
                  'md:isScrolled:text-3xl'
                )}
              >
                <span
                  className={cn(
                    'font-bold',
                    isScrolled ? 'text-black' : 'text-orange-500'
                  )}
                >
                  Alika
                </span>
                <span
                  className={cn(
                    'font-bold',
                    isScrolled ? 'text-orange-500' : 'text-white'
                  )}
                >
                  Cheryl
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="ml-auto hidden items-center gap-4 md:flex">
              {['home', 'about', 'blog', 'gallery', 'contact'].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToTopOrSection(section)}
                    className={cn(
                      'cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium capitalize transition-all duration-300',
                      isScrolled
                        ? section === 'home'
                          ? 'bg-orange-500 text-white hover:bg-orange-600'
                          : 'text-gray-800 hover:bg-gray-100'
                        : section === 'home'
                          ? 'bg-white text-gray-800 hover:bg-orange-100'
                          : 'text-white hover:bg-white/20'
                    )}
                  >
                    {section === 'home' ? 'Home' : section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button – DIPERBAIKI: right-6 */}
            <button
              className="absolute top-1/2 right-6 z-50 -translate-y-1/2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900 transition-all"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-all"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu – Tetap cantik polaroid cards */}
      {/* Mobile Fullscreen Menu – Student Friendly */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 transition-transform duration-500 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex w-full max-w-sm flex-col gap-5 px-6 py-16">
          {[
            { id: 'home', color: 'from-orange-400 to-orange-500' },
            { id: 'about', color: 'from-blue-400 to-blue-500' },
            { id: 'blog', color: 'from-green-400 to-green-500' },
            { id: 'gallery', color: 'from-purple-400 to-purple-500' },
            { id: 'contact', color: 'from-pink-400 to-pink-500' },
          ].map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.1 * i,
                duration: 0.5,
                ease: 'easeOut',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToTopOrSection(item.id)}
              className={cn(
                'rounded-xl bg-gradient-to-r px-6 py-5 text-left shadow-md transition-all',
                'hover:scale-[1.02]',
                item.color
              )}
            >
              <span className="text-xl font-semibold text-white capitalize">
                {item.id === 'home' ? 'Home' : item.id}
              </span>
              <p className="mt-1 text-sm text-white/80">
                {item.id === 'home' && 'Halaman utama'}
                {item.id === 'about' && 'Tentang aku'}
                {item.id === 'blog' && 'Cerita & tulisan'}
                {item.id === 'gallery' && 'Foto & karya'}
                {item.id === 'contact' && 'Hubungi aku'}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  )
}
