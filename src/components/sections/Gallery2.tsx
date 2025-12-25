'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/cn'
import { X, BookOpen, ChefHat, Plane, Camera } from 'lucide-react'

const galleryImages = [
  {
    url: '/images/gallery/gallery-1.jpg',
    title: 'Mount Bromo Sunset',
    category: 'Travel',
    description: 'Breathtaking sunset view from Mount Bromo',
  },
  {
    url: '/images/gallery/gallery-2.jpg',
    title: 'Homemade Carbonara',
    category: 'Cooking',
    description: 'My first attempt at authentic Italian carbonara',
  },
  {
    url: '/images/gallery/gallery-3.jpg',
    title: 'Study Session',
    category: 'Learning',
    description: 'My cozy study corner with coffee',
  },
  {
    url: '/images/gallery/gallery-4.jpg',
    title: 'Golden Hour Beach',
    category: 'Photography',
    description: 'Capturing the perfect golden hour at the beach',
  },
  {
    url: '/images/gallery/gallery-5.jpg',
    title: 'Hiking Adventure',
    category: 'Travel',
    description: 'Mountain hiking with amazing views',
  },
  {
    url: '/images/gallery/gallery-6.jpg',
    title: 'Fresh Vegetables',
    category: 'Cooking',
    description: 'Farm fresh vegetables for cooking',
  },
  {
    url: '/images/gallery/gallery-7.jpg',
    title: 'Library Study',
    category: 'Learning',
    description: 'Peaceful study time at the library',
  },
  {
    url: '/images/gallery/gallery-8.jpg',
    title: 'Urban Street',
    category: 'Photography',
    description: 'Street photography in Jakarta',
  },
  {
    url: '/images/gallery/gallery-9.jpg',
    title: 'Dessert Creation',
    category: 'Cooking',
    description: 'My homemade dessert masterpiece',
  },
  {
    url: '/images/gallery/gallery-10.jpg',
    title: 'Temple Visit',
    category: 'Travel',
    description: 'Exploring cultural heritage',
  },
  {
    url: '/images/gallery/gallery-11.jpg',
    title: 'Camera Gear',
    category: 'Photography',
    description: 'My photography equipment setup',
  },
  {
    url: '/images/gallery/gallery-12.jpg',
    title: 'Note Taking',
    category: 'Learning',
    description: 'Organizing my study notes',
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

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-orange-50 to-white px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600">
            My favorite captured moments 📸
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
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
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                'group relative aspect-square cursor-pointer overflow-hidden rounded-2xl',
                'bg-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
              )}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent',
                  'flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                )}
              >
                <div className="text-white">
                  <h3 className="mb-1 text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 z-10 text-white transition-colors hover:text-orange-500"
              onClick={() => setSelectedImage(null)}
            >
              <X size={36} />
            </button>

            <div className="w-full max-w-5xl">
              <div className="relative mx-auto mb-8 aspect-video max-h-[80vh] md:aspect-auto">
                <Image
                  src={filteredImages[selectedImage].url}
                  alt={filteredImages[selectedImage].title}
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>

              <div className="text-center text-white">
                <h3 className="mb-3 text-3xl font-bold md:text-4xl">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="mx-auto mb-4 max-w-2xl text-lg text-gray-300">
                  {filteredImages[selectedImage].description}
                </p>
                <span className="inline-block rounded-full bg-orange-500 px-6 py-2 text-sm font-medium">
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
