'use client'

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
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            About <span className="text-orange-500">Me</span>
          </h2>
          <p className="text-lg text-gray-600">Get to know me better!</p>
        </div>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="relative">
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
          </div>

          {/* Profile Info */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-3xl font-bold">Hi, I'm Alika!</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                Saya seorang pelajar yang passionate tentang berbagai hal
                menarik dalam hidup. Saya percaya bahwa setiap hari adalah
                kesempatan untuk belajar sesuatu yang baru dan berbagi
                pengalaman dengan orang lain.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
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
                <div
                  key={i}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="grid gap-6 md:grid-cols-4">
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
            <div
              key={i}
              className={cn(
                'transform rounded-2xl p-6 text-white transition-transform hover:scale-105',
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
            </div>
          ))}
        </div>

        {/* Personal Statement */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-center text-white md:p-12">
          <p className="text-xl leading-relaxed font-medium md:text-2xl">
            "Through this blog, I want to share my journey as a student who's
            constantly learning, exploring, creating, and capturing life's
            beautiful moments. Join me in this adventure!"
          </p>
        </div>
      </div>
    </section>
  )
}
