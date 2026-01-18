'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Camera,
  Plane,
  Globe2,
  Utensils,
  BookOpen,
  Sparkles,
  Heart,
} from 'lucide-react'
import type { Variants } from 'framer-motion'
import { Patrick_Hand, Fredoka } from 'next/font/google'

// Font Setup
const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-hand',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
})

// Animation Variants
const floatVariant: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

const popInVariant: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.5, delay: 0.3 },
  },
}

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function AboutMe() {
  return (
    <div
      className={
        '${patrickHand.variable} ${fredoka.variable} font-hand relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-100/60 via-white to-yellow-50/60 text-gray-800'
      }
    >
      {/*Background Elements */}
      {/* Sky Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-200/50 to-green-100/30" />

      {/* Background Mountain SVG */}
      <div className="w-fullopacity-70 absolute top-0 right-0 -z-10 h-1/2 md:h-2/3 md:w-1/2">
        <svg
          viewBox="0 0 1440 320"
          className="h-full w-full fill-current text-green-200/80"
        >
          <path
            fill="currentColor"
            d="MO,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,149.3C1200,128,1320,128,1390,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Decorative Plane */}
      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute top-4 left-4 z-10 md:top-8 md:left-8"
      >
        <Plane className="h-12 w-12 rotate-[-15deg] text-orange-500 drop-shadow-md" />
      </motion.div>

      {/* Decorative Volcano (Using Unsplash watercolor mountain) */}
      <div className="absolute top-0 right-0 z-0 h-32 w-32 opacity-80 md:h-48 md:w-48">
        <Image
          src="https://images.unsplash.com/photo-1575351657682-ba637042a420?auto=format&fit=crop&q=80&w=300"
          alt="Watercolor Mountain"
          width={300}
          height={300}
          className="rounded-full object-cover opacity-70 blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-8 md:py-16 lg:py-24">
        {/* Header Title */}
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center md:mb-12"
        >
          <div className="relative inline-block">
            <h1 className="font-heading text-4xl font-bold text-pink-500 drop-shadow-sm md:text-6xl">
              About Me
            </h1>
            <Camera
              className="absolute top-0 right-[-20px] text-gray-600"
              size={32}
            />
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column: Text */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="space-y-4 md:space-y-6"
          >
            {/* Badge: Hi! Aku Alika! */}
            <div className="relative inline-block rotate-[-2deg]">
              <div className="font-heading relative rounded-sm bg-orange-400 px-6 py-2 text-xl font-bold text-white shadow-md md:text-2xl">
                Hi! Aku Alika! 😊👋
                {/* Tape Effect */}
                <div className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-1 bg-yellow-200/50 shadow-sm backdrop-blur-[1px]" />
              </div>
            </div>

            {/* Intro Text */}
            <p className="text-lg leading-relaxed text-gray-800 md:text-2xl">
              I’m a 5<sup className="text-sm">th</sup> grade student yang suka
              belajar dan mencoba hal-hal baru.
            </p>

            {/* Highlights Line */}
            <div className="relative inline-block w-full">
              <p className="relative z-10 text-xl leading-relaxed text-gray-800 md:text-2xl">
                I love{' '}
                <span className="font-bold text-teal-700">traveling</span>,{' '}
                <span className="font-bold text-blue-700">cooking</span>, and{' '}
                <span className="font-bold text-gray-700">photography</span>{' '}
                📸✨
              </p>
              {/* Hand-drawn underline */}
              <svg
                className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full text-orange-300"
                viewBox="0 0 300 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,5 Q150,8 295,2"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* List Section */}
            <div className="space-y-4 pt-4">
              <p className="mb-2 text-lg font-semibold text-gray-600">
                Here, I want to share my stories about:
              </p>

              <ul className="space-y-4">
                <ListItem
                  icon={<Globe2 className="text-blue-500" size={24} />}
                  title="My fun travel adventures"
                  emoji="🌍✈️"
                />
                <ListItem
                  icon={<Utensils className="text-orange-500" size={24} />}
                  title="Cooking"
                  suffix="simple recipes at home"
                  titleColor="text-orange-600"
                  //imgIcon="/egg-icon.png" // Placeholder logic
                />
                <ListItem
                  icon={<Camera className="text-gray-600" size={24} />}
                  title="My favorite photos from everywhere"
                />
                <ListItem
                  icon={<BookOpen className="text-teal-500" size={24} />}
                  title="Things I learn every day"
                  titleColor="text-teal-600"
                />
              </ul>
            </div>

            {/* Footer Note */}
            <div className="relative mt-8 rotate-1 transform rounded-lg border-t-2 border-b-2 border-dashed border-orange-200 bg-orange-50/50 p-4 pt-4 pb-4">
              <p className="text-center text-lg font-bold text-gray-700 md:text-xl">
                Hope you enjoy and get inspired ya! <br />
                Let's have fun and learn{' '}
                <span className="text-teal-600">together!</span> ❤️🙂
              </p>
            </div>
          </motion.div>

          {/* Right Column: Photo Frame */}
          <div className="relative mt-8 flex justify-center md:mt-0">
            {/* Decorative Floating Elements around Photo */}
            <motion.div
              variants={floatVariant}
              animate="animate"
              className="absolute -top-10 -left-4 z-20"
            >
              <Globe2 className="h-12 w-12 rounded-full bg-white p-1 text-blue-400 drop-shadow-lg" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-20 -right-4 z-20"
            >
              <div className="rotate-6 rounded border bg-white p-2 shadow-md">
                <BookOpen className="h-8 w-8 text-red-400" />
              </div>
            </motion.div>

            {/* THE POLAROID FRAME & POP-OUT IMAGE */}
            <motion.div
              variants={popInVariant}
              initial="hidden"
              animate="visible"
              className="relative h-[480px] w-[360px] md:h-[560px] md:w-[420px]"
            >
              {/* The White Frame (Rotated & Torn effect) */}
              <div className="absolute inset-x-4 top-12 bottom-0 z-0 flex rotate-[-3deg] flex-col items-center justify-end rounded-sm border border-gray-100 bg-white p-4 pb-8 shadow-xl">
                {/* Inner textural background inside frame */}
                <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-100 opacity-50">
                  <Image
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000"
                    alt="Background texture"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
              </div>

              {/* THE GIRL IMAGE (Pop-out logic) 
                  NOTE: For the best pop-out effect, the image needs to be a transparent PNG (cutout) 
                  of the person. The bottom is clipped, head sticks out.
              */}
              <div className="absolute bottom-6 left-1/2 z-10 h-[110%] w-[90%] -translate-x-1/2">
                {/* Using a placeholder image. 
                   In a real scenario, use a transparent PNG of the girl here.
                   The 'object-contain' and 'bottom' positioning helps simulate the pop-out if image has transparency.
                 */}
                <Image
                  src="/images/aboutme.png" // Ganti dengan foto transparan Anda
                  alt="Alika Portrait"
                  fill
                  className="mask-popout rounded-b-lg object-cover object-top pl-4 shadow-inner"
                  // Style hack: rounded bottom to fit frame, top is free
                  style={{
                    borderRadius: '0 0 10px 10px',
                    maskImage:
                      'linear-gradient(to bottom, black 80%, black 100%)', // Simple mask
                  }}
                />

                {/* If you have a real transparent PNG, remove styling above and use this:
                 <Image src="/alika-cutout.png" width={400} height={500} className="absolute bottom-0 drop-shadow-xl" />
                 */}
              </div>

              {/* Decorative Frame Elements (Tape, Camera) */}
              <div className="absolute top-8 right-8 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-800 shadow-lg">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              </div>

              {/* Camera hanging decoration */}
              <div className="absolute bottom-20 -left-6 z-20 rotate-12 rounded-lg border-2 border-gray-600 bg-gray-800 p-2 text-white shadow-lg">
                <Camera size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper Component for List Items
function ListItem({
  icon,
  title,
  suffix,
  emoji,
  titleColor = 'text-gray-800',
  imgIcon,
}: any) {
  return (
    <motion.li
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex items-center gap-3"
    >
      <div className="relative shrink-0">
        {/* Simple drawn circle background for icon */}
        <div className="absolute inset-0 scale-125 -rotate-12 transform rounded-full border-2 border-gray-100 bg-white shadow-sm" />
        <div className="relative z-10 p-1">{icon}</div>
      </div>
      <div className="font-hand text-lg md:text-xl">
        <span className={`${titleColor} font-bold`}>{title}</span>
        {suffix && <span className="text-gray-600"> {suffix}</span>}
        {emoji && <span className="ml-1">{emoji}</span>}
      </div>
    </motion.li>
  )
}
