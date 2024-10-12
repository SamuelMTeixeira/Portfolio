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
import { Suspense, useMemo } from 'react'
import Loading from './loading'

export default function Page() {
  const { projects } = useProject()

  const projectImages = useMemo(
    () => projects.map(({ imageUrl }) => imageUrl),
    [projects],
  )

  return (
    <Suspense fallback={<Loading />}>
      <Header />

      <Hero />

      <ProjectPreview data={projectImages} />

      <Skills />

      <AboutMe />

      <Projects data={projects} />

      <Contact />

      <Footer />
    </Suspense>
  )
}
