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
import { Suspense } from 'react'

export default function Page() {
  const { projects } = useProject()

  return (
    <>
      <Header />

      <Hero />

      <Suspense fallback={<div>loading...</div>}>
        <ProjectPreview data={projects.map((project) => project.imageUrl)} />
      </Suspense>

      <Skills />

      <AboutMe />

      <Suspense fallback={<div>loading...</div>}>
        <Projects data={projects} />
      </Suspense>

      <Contact />

      <Footer />
    </>
  )
}
