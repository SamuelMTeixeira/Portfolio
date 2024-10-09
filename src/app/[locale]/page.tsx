'use client'

import AboutMe from '@/components/sections/aboutme'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Header from '@/components/sections/header'
import Hero from '@/components/sections/hero'
import ProjectPreview from '@/components/sections/project-preview'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import useProject from '@/hooks/useProject'

export default function Page() {
  const { data } = useProject()

  return (
    <>
      <Header />

      <Hero />

      <ProjectPreview data={data?.map((project) => project.imageUrl)} />

      <Skills />

      <AboutMe />

      <Projects data={data} />

      <Contact />

      <Footer />
    </>
  )
}
