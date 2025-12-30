'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, Instagram, Youtube, Facebook } from 'lucide-react'
import { cn } from '@/lib/cn'

export function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero3.jpg"
        alt="Alika Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content – ANIMASI */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-20 flex h-full flex-col items-center justify-end px-4 pb-40 md:items-end md:justify-end md:px-8 md:pt-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-4xl text-left md:text-right"
        >
          {/* Tagline kecil */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-2 text-xs tracking-widest text-gray-300 md:text-sm"
          >
            LEARNING TRAVELING COOKING PHOTOGRAPHY
          </motion.p>

          {/* Judul besar – stagger per baris */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-4"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-2 block text-4xl text-white md:text-7xl"
            >
              welcome
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="block text-5xl font-bold text-orange-500 md:text-8xl"
            >
              to My Blog
            </motion.span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mb-4 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Sharing stories of travel adventures, culinary exploration,
            photography journeys, and inspiring learning experiences.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator – ANIMASI */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 mt-4 -translate-x-1/2 text-center"
      >
        <p className="mb-2 text-sm text-white/80">Scroll to explore</p>
        <button
          onClick={scrollToNext}
          className="animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} className="text-white/80" />
        </button>
      </motion.div>

      {/* Social Icons – Desktop Only – ANIMASI stagger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute right-8 bottom-8 z-20 hidden gap-4 md:flex"
      >
        {[
          { Icon: Instagram, color: 'text-pink-400' },
          { Icon: Youtube, color: 'text-red-500' },
          { Icon: Facebook, color: 'text-blue-600' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 + i * 0.1 }}
            whileHover={{ scale: 1.2, y: -5 }}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm',
              'transition-all hover:bg-white/30'
            )}
          >
            <item.Icon size={20} className="text-white" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}
