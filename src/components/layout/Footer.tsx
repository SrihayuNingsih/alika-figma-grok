'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import { Heart, Instagram, Youtube, Facebook } from 'lucide-react'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 grid gap-10 md:grid-cols-4"
        >
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6 inline-block"
            >
              <div className="flex items-center text-3xl">
                <span
                  style={{ fontStyle: 'italic' }}
                  className="font-medium text-orange-500"
                >
                  Alika
                </span>
                <span style={{ fontStyle: 'italic' }} className="font-medium">
                  Cheryl
                </span>
              </div>
            </motion.div>

            <p className="mb-8 max-w-lg leading-relaxed text-gray-400">
              A elementary school student sharing stories about learning,
              cooking, traveling, and photography. Join me on this journey of
              exploration and discovery!
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#' },
                {
                  Icon: () => (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  ),
                  href: '#',
                },
                { Icon: Youtube, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full bg-white/10',
                      'transition-all duration-300 hover:bg-orange-500 hover:shadow-xl'
                    )}
                  >
                    <social.Icon size={22} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {['home', 'about', 'blog', 'gallery', 'contact'].map(
                (section, i) => (
                  <motion.li
                    key={section}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(section)}
                      className="cursor-pointer text-left text-gray-400 transition-colors duration-300 hover:text-orange-500"
                    >
                      {section.charAt(0).toUpperCase() +
                        section.slice(1).replace('blog', 'Blog Posts')}
                    </button>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="mb-6 text-xl font-bold">Categories</h3>
            <ul className="space-y-3">
              {['Learning', 'Cooking', 'Traveling', 'Photography'].map(
                (cat, i) => (
                  <motion.li
                    key={cat}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    {cat}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="mb-3 flex items-center justify-center gap-2 text-gray-400">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={18} className="fill-current text-red-500" />
            </motion.span>{' '}
            by Alika Cheryl
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Alika's Blog. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
