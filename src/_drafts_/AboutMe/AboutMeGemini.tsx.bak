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
} from 'lucide-react'
import { Patrick_Hand, Fredoka } from 'next/font/google'

// --- Fonts Setup ---
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

// --- Animation Variants ---
const floatVariant = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

const popInVariant = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.5 },
  },
}

export function AboutMe() {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[#FFFBF0] ${patrickHand.variable} ${fredoka.variable} font-hand text-gray-700`}
    >
      {/* --- BACKGROUND ELEMENTS (Watercolors & Landscapes) --- */}

      {/* Sky/Clouds Texture (Gradient base) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-100/50 via-white to-orange-50/50" />

      {/* Background Mountain (Illustration) */}
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-full opacity-80 md:h-96 md:w-2/3">
        {/* Simple SVG Shape for Mountain */}
        <svg
          viewBox="0 0 1440 320"
          className="h-full w-full fill-current object-cover object-top text-green-100"
        >
          <path
            fill="#e2e8f0"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,149.3C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Decorative Plane Top Left */}
      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute top-10 left-5 z-0 rotate-12 text-yellow-400 md:left-20"
      >
        <Plane
          size={48}
          fill="currentColor"
          strokeWidth={1.5}
          className="text-orange-400 drop-shadow-sm"
        />
        <div className="absolute top-4 left-10 w-24 -rotate-6 border-t-4 border-dotted border-blue-200" />
      </motion.div>

      {/* Decorative Mountain Peak Top Right */}
      <div className="absolute top-0 right-0 z-0 h-40 w-40 opacity-90 md:right-10">
        <Image
          src="https://images.unsplash.com/photo-1575351657682-ba637042a420?auto=format&fit=crop&q=80&w=300"
          alt="Mountain watercolor"
          width={300}
          height={300}
          className="mask-gradient-to-b rounded-full object-cover opacity-60 blur-[1px]"
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-12 md:py-20">
        {/* Header Title Centered */}
        <div className="relative mb-12 flex items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative"
          >
            {/* Curved Line Background SVG */}
            <svg
              className="absolute -bottom-2 left-1/2 -z-10 h-8 w-64 -translate-x-1/2 text-orange-200"
              viewBox="0 0 200 30"
              fill="none"
            >
              <path
                d="M10,20 Q100,5 190,20"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>

            <h1 className="font-heading text-5xl font-bold tracking-tight text-teal-600 drop-shadow-sm md:text-6xl">
              About Me
            </h1>

            {/* Camera Icon next to title */}
            <div className="absolute -top-2 -right-12 rotate-12 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
              <Camera className="text-gray-700" size={28} />
            </div>

            {/* Sparkles */}
            <Sparkles
              className="absolute top-0 -left-8 animate-pulse text-yellow-400"
              size={24}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
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
            <p className="text-xl leading-relaxed text-gray-800 md:text-2xl">
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
                  imgIcon="/egg-icon.png" // Placeholder logic
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

          {/* --- RIGHT COLUMN: PHOTO POP-OUT --- */}
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
              className="relative h-[400px] w-[320px] md:h-[450px] md:w-[380px]"
            >
              {/* The White Frame (Rotated & Torn effect) */}
              <div className="absolute inset-x-4 top-12 bottom-0 z-0 flex rotate-[-3deg] flex-col items-center justify-end rounded-sm border border-gray-100 bg-white p-4 pb-8 shadow-xl">
                {/* Inner textural background inside frame */}
                <div className="relative h-full w-full overflow-hidden rounded-sm bg-gray-100 opacity-50">
                  <Image
                    src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000"
                    alt="Background texture"
                    fill
                    className="object-cover opacity-20"
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
                  className="mask-popout rounded-b-lg object-cover object-top shadow-inner"
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
