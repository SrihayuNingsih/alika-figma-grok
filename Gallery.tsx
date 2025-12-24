import { useState } from 'react';
import { X, BookOpen, ChefHat, Plane, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1619679663063-46b197c0f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2xjYW5pYyUyMG1vdW50YWluJTIwc3Vuc2V0JTIwdHJhdmVsfGVufDF8fHx8MTc2NDI2ODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mount Bromo Sunset',
    category: 'Travel',
    description: 'Breathtaking sunset view from Mount Bromo'
  },
  {
    url: 'https://images.unsplash.com/photo-1706051555972-579324abeb9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNvb2tpbmclMjBmb29kfGVufDF8fHx8MTc2NDIzMTQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Homemade Carbonara',
    category: 'Cooking',
    description: 'My first attempt at authentic Italian carbonara'
  },
  {
    url: 'https://images.unsplash.com/photo-1755275402110-9e8eb8592814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzdHVkeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQyNjgzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Study Session',
    category: 'Learning',
    description: 'My cozy study corner with coffee'
  },
  {
    url: 'https://images.unsplash.com/photo-1674086568973-b29342fdc452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NDI2ODMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Golden Hour Beach',
    category: 'Photography',
    description: 'Capturing the perfect golden hour at the beach'
  },
  {
    url: 'https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjQyMDM2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Hiking Adventure',
    category: 'Travel',
    description: 'Mountain hiking with amazing views'
  },
  {
    url: 'https://images.unsplash.com/photo-1616632125404-33e2addbff09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBjb29raW5nfGVufDF8fHx8MTc2NDE1NTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Fresh Vegetables',
    category: 'Cooking',
    description: 'Farm fresh vegetables for cooking'
  },
  {
    url: 'https://images.unsplash.com/photo-1706528010331-0f12582db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjBzdHVkeXxlbnwxfHx8fDE3NjQyMDk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Library Study',
    category: 'Learning',
    description: 'Peaceful study time at the library'
  },
  {
    url: 'https://images.unsplash.com/photo-1762436933065-fe6d7f51d4f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY0MjY4MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Urban Street',
    category: 'Photography',
    description: 'Street photography in Jakarta'
  },
  {
    url: 'https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwY2FrZSUyMGJha2luZ3xlbnwxfHx8fDE3NjQyNjgzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Dessert Creation',
    category: 'Cooking',
    description: 'My homemade dessert masterpiece'
  },
  {
    url: 'https://images.unsplash.com/photo-1759862301680-c912f894cc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBjdWx0dXJlJTIwdHJhdmVsfGVufDF8fHx8MTc2NDI2ODMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Temple Visit',
    category: 'Travel',
    description: 'Exploring cultural heritage'
  },
  {
    url: 'https://images.unsplash.com/photo-1662367532361-ad43453c611f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGdlYXJ8ZW58MXx8fHwxNzY0MjIzODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Camera Gear',
    category: 'Photography',
    description: 'My photography equipment setup'
  },
  {
    url: 'https://images.unsplash.com/photo-1499080863200-1f37ed9cb653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9vayUyMHdyaXRpbmclMjBzdHVkeXxlbnwxfHx8fDE3NjQyNjgzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Note Taking',
    category: 'Learning',
    description: 'Organizing my study notes'
  }
];

const categories = [
  { name: 'All', icon: null },
  { name: 'Learning', icon: BookOpen },
  { name: 'Cooking', icon: ChefHat },
  { name: 'Travel', icon: Plane },
  { name: 'Photography', icon: Camera }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Photo <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-600 text-lg">My favorite captured moments 📸</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
                }`}
              >
                {Icon && <Icon size={18} />}
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square bg-gray-100"
              onClick={() => setSelectedImage(index)}
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="mb-1">{image.title}</h3>
                  <p className="text-xs text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-6xl w-full">
              <ImageWithFallback
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
              />
              <div className="text-center text-white mt-6">
                <h3 className="text-2xl mb-2">{filteredImages[selectedImage].title}</h3>
                <p className="text-gray-400 mb-1">{filteredImages[selectedImage].description}</p>
                <span className="inline-block px-4 py-1 bg-orange-500 rounded-full text-sm">
                  {filteredImages[selectedImage].category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
