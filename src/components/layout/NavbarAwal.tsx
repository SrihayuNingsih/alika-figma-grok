'use client'

import { useState, useEffect } from 'react'
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop + Mobile Navbar */}
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/90 shadow-md backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="120"
                height="40"
                viewBox="0 0 120 40"
                className="cursor-pointer"
              >
                <text
                  x="0"
                  y="30"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="32"
                  fill={isScrolled ? '#333' : '#fff'}
                  style={{ fontStyle: 'italic' }}
                >
                  Alika
                </text>
                <path
                  d="M105 8 L110 15 L118 15 L112 20 L115 28 L105 23 L95 28 L98 20 L92 15 L100 15 Z"
                  fill="#FF8C42"
                />
              </svg>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden flex-col items-end gap-2 md:flex">
              <div
                className={cn(
                  'text-xs tracking-widest',
                  isScrolled ? 'text-orange-500' : 'text-orange-400'
                )}
              >
                LEARNING TRAVELING COOKING PHOTOGRAPHY
              </div>
              <div className="flex items-center gap-3">
                {['home', 'about', 'blog', 'gallery', 'contact'].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={cn(
                        'rounded-full px-4 py-2 capitalize transition-all',
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="z-50 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={cn(
                    'block h-0.5 w-7 transition-all',
                    isMenuOpen
                      ? 'translate-y-2 rotate-45 bg-gray-800'
                      : 'bg-orange-500'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-7 transition-all',
                    isMenuOpen ? 'opacity-0' : 'bg-orange-500'
                  )}
                />
                <span
                  className={cn(
                    'block h-0.5 w-7 transition-all',
                    isMenuOpen
                      ? '-translate-y-2 -rotate-45 bg-gray-800'
                      : 'bg-orange-500'
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-pink-200 transition-transform duration-300 md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full">
          {/* Vertical Text */}
          <div className="flex w-12 items-center justify-center border-r border-pink-300">
            <div className="-rotate-90 transform text-xs tracking-widest whitespace-nowrap text-gray-700">
              LEARNING TRAVELING COOKING PHOTOGRAPHY
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
            {['home', 'about', 'blog', 'gallery', 'contact'].map(
              (section, i) => {
                const colors = [
                  'green-300',
                  'yellow-200',
                  'orange-300',
                  'green-300',
                  'gray-200',
                ]
                const rotates = [
                  'rotate-1',
                  '-rotate-2',
                  'rotate-2',
                  '-rotate-1',
                  'rotate-1',
                ]
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={cn(
                      'w-64 transform rounded-sm p-4 shadow-md transition-all hover:rotate-0 hover:shadow-lg',
                      colors[i],
                      rotates[i]
                    )}
                  >
                    <div className="text-2xl text-gray-800 capitalize">
                      {section === 'home' ? 'Home' : section}
                    </div>
                  </button>
                )
              }
            )}

            {/* Follow Me */}
            <div className="mt-8">
              <div className="relative rounded-sm border-2 border-gray-700 bg-pink-200 p-6 shadow-md">
                <div className="absolute -top-6 left-1/2 h-8 w-20 -translate-x-1/2 transform rounded-t-lg border-2 border-b-0 border-gray-700 bg-yellow-300" />
                <h3 className="mb-4 border-b-2 border-gray-700 pb-2 text-center text-xl">
                  FOLLOW ME
                </h3>
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <Instagram size={24} className="text-pink-600" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-gray-800"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <Youtube size={24} className="text-red-600" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  >
                    <Facebook size={24} className="text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
