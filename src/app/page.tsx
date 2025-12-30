import { Hero } from '@/components/sections/Hero'
import { AboutMe } from '@/components/sections/AboutMe'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { Gallery } from '@/components/sections/Gallery'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <BlogPreview />
      <Gallery />
      <Contact />
    </>
  )
}
