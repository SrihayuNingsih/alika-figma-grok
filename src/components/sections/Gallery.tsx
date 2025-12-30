'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { X, BookOpen, ChefHat, Plane, Camera } from 'lucide-react'

const galleryImages = [
  {
    url: '/images/gallery/gallery-3.jpg',
    title: 'Study Session',
    category: 'Learning',
    description: 'My cozy study corner with coffee',
    size: 'normal',
  },
  {
    url: '/images/gallery/gallery-1.jpg',
    title: 'Mount Bromo Sunset',
    category: 'Travel',
    description: 'Breathtaking sunset view from Mount Bromo',
    size: 'wide',
  },
  {
    url: '/images/gallery/gallery-8.jpg',
    title: 'Urban Street',
    category: 'Photography',
    description: 'Street photography in Jakarta',
    size: 'verywide',
  },
  {
    url: '/images/gallery/gallery-6.jpg',
    title: 'Fresh Vegetables',
    category: 'Cooking',
    description: 'Farm fresh vegetables for cooking',
    size: 'wide',
  },
  {
    url: '/images/gallery/gallery-10.jpg',
    title: 'Temple Visit',
    category: 'Travel',
    description: 'Exploring cultural heritage',
    size: 'normal',
  },
  {
    url: '/images/gallery/gallery-4.jpg',
    title: 'Golden Hour Beach',
    category: 'Photography',
    description: 'Capturing the perfect golden hour at the beach',
    size: 'normal',
  },
  {
    url: '/images/gallery/gallery-2.jpg',
    title: 'Homemade Carbonara',
    category: 'Cooking',
    description: 'My first attempt at authentic Italian carbonara',
    size: 'wide',
  },
  {
    url: '/images/gallery/gallery-11.jpg',
    title: 'Camera Gear',
    category: 'Photography',
    description: 'My photography equipment setup',
    size: 'verytall',
  },
  {
    url: '/images/gallery/gallery-12.jpg',
    title: 'Note Taking',
    category: 'Learning',
    description: 'Organizing my study notes',
    size: 'normal',
  },
  {
    url: '/images/gallery/gallery-5.jpg',
    title: 'Hiking Adventure',
    category: 'Travel',
    description: 'Mountain hiking with amazing views',
    size: 'wide',
  },
  {
    url: '/images/gallery/gallery-9.jpg',
    title: 'Dessert Creation',
    category: 'Cooking',
    description: 'My homemade dessert masterpiece',
    size: 'normal',
  },
  {
    url: '/images/gallery/gallery-7.jpg',
    title: 'Library Study',
    category: 'Learning',
    description: 'Peaceful study time at the library',
    size: 'normal',
  },
]

const categories = [
  { name: 'All', icon: null },
  { name: 'Learning', icon: BookOpen },
  { name: 'Cooking', icon: ChefHat },
  { name: 'Travel', icon: Plane },
  { name: 'Photography', icon: Camera },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  const getGridClass = (size: string) => {
    switch (size) {
      case 'wide':
        return 'col-span-2'
      case 'verywide':
        return 'col-span-3 row-span-2'
      case 'tall':
        return 'row-span-2'
      case 'verytall':
        return 'row-span-3 col-span-2'
      default:
        return 'col-span-1'
    }
  }

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-orange-50 to-white px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600">
            My favorite captured moments 📸
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  'flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300',
                  selectedCategory === category.name
                    ? 'scale-105 bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'border-2 border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:shadow-md'
                )}
              >
                {Icon && <Icon size={20} />}
                {category.name}
              </button>
            )
          })}
        </motion.div>

        {/* Dynamic Grid with Framer Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-4 lg:grid-cols-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg',
                'transition-all duration-500 hover:z-10 hover:shadow-2xl',
                getGridClass(image.size)
              )}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="text-white">
                  <h3 className="mb-1 text-lg font-bold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 z-20 rounded-full bg-black/50 p-2 text-white transition-colors hover:text-orange-500 md:top-8 md:right-8"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={36} />
            </button>

            <div className="flex max-h-full w-full max-w-5xl flex-col items-center justify-center">
              <div className="relative flex max-h-[70vh] w-full items-center justify-center md:max-h-[80vh]">
                <Image
                  src={filteredImages[selectedImage].url}
                  alt={filteredImages[selectedImage].title}
                  fill
                  className="rounded-2xl object-contain shadow-2xl"
                  priority
                />
              </div>

              <div className="mt-6 px-4 text-center text-white">
                <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="mb-3 max-w-2xl text-base text-gray-300 md:text-lg">
                  {filteredImages[selectedImage].description}
                </p>
                <span className="inline-block rounded-full bg-orange-500 px-5 py-2 text-sm font-medium">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
