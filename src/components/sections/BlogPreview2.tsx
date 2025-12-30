'use client'

import Image from 'next/image'
import { cn } from '@/lib/cn'
import {
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  BookOpen,
  ChefHat,
  Plane,
  Camera,
} from 'lucide-react'

const blogPreviews = [
  {
    title: 'Mastering Italian Pasta: My Journey to Perfect Carbonara',
    excerpt:
      'Discover how I learned to make authentic Italian carbonara from scratch, including tips on choosing the right ingredients and avoiding common mistakes.',
    image: '/images/blog/post5.jpg', // ← ganti jadi lokal nanti
    category: 'Cooking',
    date: 'Nov 20, 2025',
    readTime: '8 min read',
    icon: ChefHat,
    color: 'orange',
  },
  {
    title: 'Studying Abroad: How I Plan My Dream Exchange Program',
    excerpt:
      'My research and planning process for studying abroad, including scholarship applications, language preparation, and cultural adaptation tips.',
    image: '/images/blog/post2.jpg',
    category: 'Learning',
    date: 'Nov 18, 2025',
    readTime: '10 min read',
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'Hiking Mount Rinjani: A Life-Changing Adventure',
    excerpt:
      'My incredible journey hiking Mount Rinjani in Lombok, complete with stunning sunrise views, camping experiences, and travel tips for beginners.',
    image: '/images/blog/post3.jpg',
    category: 'Traveling',
    date: 'Nov 15, 2025',
    readTime: '12 min read',
    icon: Plane,
    color: 'blue',
  },
  {
    title: 'Golden Hour Photography: Tips for Capturing Perfect Sunsets',
    excerpt:
      'Learn my techniques for shooting stunning sunset photos, including camera settings, composition rules, and the best locations around Jakarta.',
    image: '/images/blog/post4.jpg',
    category: 'Photography',
    date: 'Nov 12, 2025',
    readTime: '7 min read',
    icon: Camera,
    color: 'purple',
  },
  {
    title: 'Farm-to-Table: Creating Fresh Salads with Local Vegetables',
    excerpt:
      'Exploring local farmers markets and creating healthy, delicious salads with seasonal vegetables. Plus my favorite dressing recipes!',
    image: '/images/blog/post1.jpg',
    category: 'Cooking',
    date: 'Nov 8, 2025',
    readTime: '6 min read',
    icon: ChefHat,
    color: 'orange',
  },
  {
    title: 'Effective Study Methods: How I Ace My Exams',
    excerpt:
      'Sharing my proven study techniques, time management strategies, and productivity tips that helped me achieve better grades.',
    image: '/images/blog/post6.jpg',
    category: 'Learning',
    date: 'Nov 5, 2025',
    readTime: '9 min read',
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'Exploring Yogyakarta: Culture, Food, and Hidden Gems',
    excerpt:
      'A comprehensive guide to Yogyakarta including must-visit temples, local street food recommendations, and off-the-beaten-path locations.',
    image: '/images/blog/post7.jpg',
    category: 'Traveling',
    date: 'Nov 1, 2025',
    readTime: '11 min read',
    icon: Plane,
    color: 'blue',
  },
  {
    title: 'Street Photography: Capturing Urban Life in Jakarta',
    excerpt:
      'My approach to street photography, including tips on being respectful, finding interesting subjects, and telling stories through images.',
    image: '/images/blog/post8.jpg',
    category: 'Photography',
    date: 'Oct 28, 2025',
    readTime: '8 min read',
    icon: Camera,
    color: 'purple',
  },
  // Tambah 4 lagi kalau mau, atau cukup 4 biar nggak terlalu panjang di home
]

const categoryStyles = {
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  green: 'bg-green-100 text-green-700 border-green-200',
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
}

export function BlogPreview() {
  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: 'Check out this blog post by Alika Cheryl!',
          url: window.location.href,
        })
        .catch(() => {})
    }
  }

  return (
    <section
      id="blog"
      className="bg-gradient-to-b from-gray-50 to-white px-4 py-20"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Latest <span className="text-orange-500">BlogPosts</span>
          </h2>
          <p className="text-lg text-gray-600">
            Sharing my experiences and learnings 📝
          </p>
        </div>

        {/* Grid Previews */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPreviews.map((post, index) => {
            const Icon = post.icon
            return (
              <article
                key={index}
                className={cn(
                  'group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl',
                  'border border-gray-100 transition-all duration-500 hover:-translate-y-3'
                )}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        'flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium',
                        categoryStyles[
                          post.color as keyof typeof categoryStyles
                        ]
                      )}
                    >
                      <Icon size={16} />
                      {post.category}
                    </span>
                  </div>
                  {/* Share Button */}
                  <button
                    onClick={() => handleShare(post.title)}
                    className={cn(
                      'absolute top-4 right-4 h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm',
                      'flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100',
                      'hover:bg-white hover:shadow-md'
                    )}
                  >
                    <Share2 size={18} className="text-gray-700" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={cn(
                      'mb-3 line-clamp-2 text-xl font-bold transition-colors duration-300 group-hover:text-orange-500'
                    )}
                  >
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="mb-5 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <button
                    className={cn(
                      'flex items-center gap-2 text-sm font-medium text-orange-500',
                      'transition-all duration-300 hover:gap-3'
                    )}
                  >
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button
            className={cn(
              'bg-gradient-to-r from-orange-500 to-pink-500 px-10 py-4 font-semibold text-white',
              'transform rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl'
            )}
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}
