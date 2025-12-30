import { Heart, Instagram, Youtube, Facebook } from 'lucide-react'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-12 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* About */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <text
                  x="0"
                  y="30"
                  fontFamily="'Brush Script MT', cursive"
                  fontSize="32"
                  fill="#fff"
                  style={{ fontStyle: 'italic' }}
                >
                  Alika
                </text>
                <path
                  d="M105 8 L110 15 L118 15 L112 20 L115 28 L105 23 L95 28 L98 20 L92 15 L100 15 Z"
                  fill="#FF8C42"
                />
              </svg>
            </div>
            <p className="mb-4 text-gray-400">
              A high school student sharing stories about learning, cooking,
              traveling, and photography. Join me on this journey of exploration
              and discovery!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-orange-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-orange-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-orange-500"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-orange-500"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="transition-colors hover:text-orange-500"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="transition-colors hover:text-orange-500"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="transition-colors hover:text-orange-500"
                >
                  Blog Posts
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="transition-colors hover:text-orange-500"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="transition-colors hover:text-orange-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg">Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="cursor-pointer transition-colors hover:text-orange-500">
                Learning
              </li>
              <li className="cursor-pointer transition-colors hover:text-orange-500">
                Cooking
              </li>
              <li className="cursor-pointer transition-colors hover:text-orange-500">
                Traveling
              </li>
              <li className="cursor-pointer transition-colors hover:text-orange-500">
                Photography
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="mb-2 flex items-center justify-center gap-2">
            Made with{' '}
            <Heart
              size={16}
              className="animate-pulse fill-current text-red-500"
            />{' '}
            by Alika
          </p>
          <p className="text-sm">© 2024 Alika's Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
