import AboutMe from '@/components/sections/aboutme'
import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import ProjectPreview from '@/components/sections/project-preview'
import Skills from '@/components/sections/skills'

export default function Page() {
  return (
    <>
      <Header />

      <Hero />

      <ProjectPreview />

      <Skills />

      <AboutMe />

      <Footer />
    </>
  )
}
