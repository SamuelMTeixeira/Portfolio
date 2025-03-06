import AboutMe from '@/components/sections/aboutme'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import ProjectOverview from '@/components/sections/project-overview'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'

export default function Page() {
  return (
    <>
      <Header />

      <Hero />

      <ProjectOverview />

      <AboutMe />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </>
  )
}
