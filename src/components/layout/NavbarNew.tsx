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
      setIsScrolled(window.scrollY > 50)
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
      {/* Desktop + Mobile Navbar */}
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/70 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <nav
          className={cn(
            'relative container mx-auto px-4',
            isScrolled ? 'h-16' : 'h-20 md:h-24'
          )}
        >
          <div className="flex h-full items-center justify-between">
            {/* Logo – Klik kembali ke atas */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <button
                onClick={() => scrollToTopOrSection('home')}
                className={cn(
                  'flex items-center gap-1 transition-all duration-300',
                  'text-2xl sm:text-3xl md:text-4xl',
                  'max-sm:text-xl',
                  'max-sm:isScrolled:text-lg',
                  'md:isScrolled:text-3xl'
                )}
              >
                <span
                  className={cn(
                    'font-bold italic',
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
                      'rounded-full px-5 py-2.5 text-lg font-medium capitalize transition-all duration-300',
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

            {/* Mobile Menu Button */}
            <button
              className="absolute top-1/2 right-4 z-50 -translate-y-1/2 md:hidden"
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

      {/* Mobile Fullscreen Menu – Polaroid Cards Acak */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 transition-transform duration-500 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center gap-8 px-8 py-16">
          {['home', 'about', 'blog', 'gallery', 'contact'].map((section, i) => {
            const cardColors = [
              'bg-gradient-to-br from-pink-300 to-purple-300 text-white shadow-pink-300/50',
              'bg-gradient-to-br from-orange-300 to-yellow-300 text-gray-800 shadow-orange-300/50',
              'bg-gradient-to-br from-green-300 to-teal-300 text-white shadow-green-300/50',
              'bg-gradient-to-br from-purple-300 to-pink-300 text-white shadow-purple-300/50',
              'bg-gradient-to-br from-blue-300 to-cyan-300 text-white shadow-blue-300/50',
            ]
            const rotates = [
              'rotate-3',
              '-rotate-2',
              'rotate-1',
              '-rotate-3',
              'rotate-2',
            ]
            const delays = [0.2, 0.4, 0.6, 0.8, 1.0]

            return (
              <motion.button
                key={section}
                initial={{ opacity: 0, y: 50, rotate: 10 }}
                animate={
                  isMenuOpen ? { opacity: 1, y: 0, rotate: rotates[i] } : {}
                }
                transition={{
                  delay: delays[i],
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.1, rotate: 0, y: -10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToTopOrSection(section)}
                className={cn(
                  'relative w-80 max-w-full rounded-2xl px-8 py-10 text-center shadow-2xl transition-all duration-300',
                  cardColors[i]
                )}
              >
                {/* Polaroid frame */}
                <div className="absolute inset-0 rounded-2xl border-8 border-white/80" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold capitalize">
                    {section === 'home' ? 'Home' : section}
                  </h3>
                </div>
                <div className="absolute right-0 bottom-0 left-0 h-16 rounded-b-2xl bg-white/90" />
              </motion.button>
            )
          })}

          {/* Follow Me – Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMenuOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 w-full max-w-md"
          >
            <div className="relative rounded-3xl border-4 border-gray-800 bg-gradient-to-br from-yellow-300 to-orange-400 p-8 shadow-2xl">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-t-3xl border-4 border-b-0 border-x-gray-800 border-t-gray-800 bg-yellow-400 px-8 py-3">
                <h3 className="text-2xl font-bold text-gray-800">FOLLOW ME</h3>
              </div>
              <div className="mt-6 flex justify-center gap-6">
                <a
                  href="#"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-125"
                >
                  <Instagram
                    size={32}
                    className="text-pink-600 transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-125"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-800 transition-transform group-hover:scale-110"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-125"
                >
                  <Youtube
                    size={32}
                    className="text-red-600 transition-transform group-hover:scale-110"
                  />
                </a>
                <a
                  href="#"
                  className="group flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:scale-125"
                >
                  <Facebook
                    size={32}
                    className="text-blue-600 transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
