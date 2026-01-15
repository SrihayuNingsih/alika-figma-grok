'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import {
  GraduationCap,
  MapPin,
  Cake,
  Heart,
  BookOpen,
  ChefHat,
  Plane,
  Camera,
} from 'lucide-react'

export function AboutMe() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-orange-50 px-4 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title – Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-gray-600">Get to know me better!</p>
        </motion.div>

        {/* Profile + Info – Animation from sides */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="mb-16 grid items-center gap-12 md:grid-cols-2"
        >
          {/* Profile Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rotate-3 rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500" />
            <div className="relative rounded-3xl bg-white p-2 shadow-2xl">
              <Image
                src="/images/aboutme2.jpg"
                alt="Alika"
                width={600}
                height={800}
                className="h-96 w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-2 text-3xl font-bold"
              >
                Hi, I'm Alika!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg leading-relaxed text-gray-600"
              >
                Saya seorang pelajar yang suka belajar hal-hal baru. Buatku,
                belajar itu bukan cuma soal nilai, tapi juga tentang membuka
                wawasan dan mencoba pengalaman baru. Kalau ada waktu luang dan
                nggak berkutat dengan buku pelajaran, kamu bakal nemuin aku lagi
                packing tas buat traveling ke tempat-tempat baru atau lagi sibuk
                di dapur nyobain resep masakan yang lagi viral, apalagi kalau
                hasilnya bisa dinikmati bareng keluarga atau teman.
                <br />
                Fotografi adalah caraku mengabadikan semua momen itu, karena
                bagiku, kamera adalah cara terbaik untuk menghentikan waktu.{' '}
                <br />{' '}
                <span className="font-bold text-orange-600 italic">
                  Life is an adventure, and I'm just here to capture it all!
                </span>
              </motion.p>
            </div>

            {/* Info Cards – Stagger */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: GraduationCap,
                  bg: 'bg-orange-100',
                  color: 'text-orange-500',
                  label: 'Status',
                  value: 'Elementary School Student',
                },
                {
                  icon: MapPin,
                  bg: 'bg-pink-100',
                  color: 'text-pink-500',
                  label: 'Location',
                  value: 'LA City, ID',
                },
                {
                  icon: Cake,
                  bg: 'bg-purple-100',
                  color: 'text-purple-500',
                  label: 'Age',
                  value: '10 years old',
                },
                {
                  icon: Heart,
                  bg: 'bg-blue-100',
                  color: 'text-blue-500',
                  label: 'Interests',
                  value: '4 Hobbies',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-full',
                        item.bg
                      )}
                    >
                      <item.icon
                        className={cn('text-lg', item.color)}
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-medium text-gray-800">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hobbies – Stagger + Hover Lift */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-6 md:grid-cols-4"
        >
          {[
            {
              icon: BookOpen,
              gradient: 'from-green-400 to-green-600',
              title: 'Learning',
              desc: 'Passionate about education and always eager to expand my knowledge in various subjects.',
            },
            {
              icon: ChefHat,
              gradient: 'from-orange-400 to-red-600',
              title: 'Cooking',
              desc: 'Love experimenting with new recipes and creating delicious dishes for my family.',
            },
            {
              icon: Plane,
              gradient: 'from-blue-400 to-cyan-600',
              title: 'Traveling',
              desc: 'Exploring new places and experiencing different cultures is what I live for.',
            },
            {
              icon: Camera,
              gradient: 'from-purple-400 to-pink-600',
              title: 'Photography',
              desc: 'Capturing beautiful moments and telling stories through my lens is my passion.',
            },
          ].map((hobby, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={cn(
                'transform rounded-2xl p-6 text-white transition-transform',
                `bg-gradient-to-br ${hobby.gradient}`
              )}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <hobby.icon size={28} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{hobby.title}</h3>
              <p className="text-sm leading-relaxed text-white/90">
                {hobby.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Statement – Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-center text-white md:p-12"
        >
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            "Through this blog, I want to share my journey as a student who's
            constantly learning, exploring, creating, and capturing life's
            beautiful moments. Join me in this adventure!"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
