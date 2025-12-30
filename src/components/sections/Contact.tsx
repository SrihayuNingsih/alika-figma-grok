'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Facebook,
  CheckCircle2,
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate sending (ganti dengan real API nanti)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Message sent:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
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
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            I'd love to hear from you! Let's connect about learning, traveling,
            cooking, or photography 💌
          </p>
        </motion.div>

        {/* Main Grid – Animation from sides */}
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-sm md:p-10"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl"
            >
              Send Me a Message
            </motion.h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-500 shadow-lg"
                >
                  <CheckCircle2 className="text-white" size={40} />
                </motion.div>
                <h4 className="mb-3 text-2xl font-bold text-green-700 md:text-3xl">
                  Message Sent Successfully! 🎉
                </h4>
                <p className="text-lg leading-relaxed text-green-600">
                  Thank you, {formData.name}! I'll reply as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={cn(
                        'w-full rounded-2xl border-2 bg-white/50 py-4 pr-4 pl-12 backdrop-blur-sm',
                        'transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 focus:outline-none',
                        'border-gray-200 placeholder-gray-400'
                      )}
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={cn(
                        'w-full rounded-2xl border-2 bg-white/50 py-4 pr-4 pl-12 backdrop-blur-sm',
                        'transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 focus:outline-none',
                        'border-gray-200 placeholder-gray-400'
                      )}
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute top-4 left-4 text-gray-400"
                      size={20}
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      disabled={isSubmitting}
                      className={cn(
                        'w-full resize-none rounded-2xl border-2 bg-white/50 pt-12 pr-4 pb-4 pl-12 backdrop-blur-sm',
                        'transition-all focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 focus:outline-none',
                        'border-gray-200 placeholder-gray-400'
                      )}
                      placeholder="Write your message here..."
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    'w-full rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 py-5 text-lg font-bold text-white',
                    'flex items-center justify-center gap-3 shadow-xl transition-all duration-300 hover:shadow-2xl',
                    isSubmitting && 'cursor-not-allowed opacity-70'
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-6 w-6 animate-spin rounded-full border-4 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={22} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            {/* Info Cards */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-2xl font-bold text-gray-800 md:text-3xl"
              >
                Let's Connect
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-10 text-lg leading-relaxed text-gray-600"
              >
                Feel free to reach out! I'm always excited to connect with
                fellow learners, travelers, foodies, and photographers.
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="space-y-6"
              >
                {[
                  {
                    icon: MapPin,
                    color: 'orange',
                    title: 'Location',
                    text: 'LA City, Indonesia 🇮🇩',
                  },
                  {
                    icon: Mail,
                    color: 'pink',
                    title: 'Email',
                    text: 'alika.cheryl15@gmail.com',
                  },
                  {
                    icon: Clock,
                    color: 'purple',
                    title: 'Response Time',
                    text: 'Usually within 24 hours 📨',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className={cn(
                      'group flex items-start gap-5 rounded-2xl border bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl',
                      item.color === 'orange' &&
                        'border-orange-100 hover:border-orange-300',
                      item.color === 'pink' &&
                        'border-pink-100 hover:border-pink-300',
                      item.color === 'purple' &&
                        'border-purple-100 hover:border-purple-300'
                    )}
                  >
                    <div
                      className={cn(
                        'flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-colors',
                        item.color === 'orange' &&
                          'bg-orange-100 group-hover:bg-orange-200',
                        item.color === 'pink' &&
                          'bg-pink-100 group-hover:bg-pink-200',
                        item.color === 'purple' &&
                          'bg-purple-100 group-hover:bg-purple-200'
                      )}
                    >
                      <item.icon
                        size={26}
                        className={cn(
                          item.color === 'orange' && 'text-orange-600',
                          item.color === 'pink' && 'text-pink-600',
                          item.color === 'purple' && 'text-purple-600'
                        )}
                      />
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Social Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="rounded-3xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-8 text-white shadow-2xl md:p-10"
            >
              <h3 className="mb-6 text-2xl font-bold md:text-3xl">
                Follow My Journey 🌟
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-white/90">
                Stay updated with my latest adventures, recipes, study tips, and
                photos!
              </p>
              <div className="flex gap-5">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/40"
                >
                  <Instagram
                    size={28}
                    className="text-white transition-transform group-hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/40"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/40"
                >
                  <Youtube
                    size={28}
                    className="text-white transition-transform group-hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/40"
                >
                  <Facebook
                    size={28}
                    className="text-white transition-transform group-hover:scale-110"
                  />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
