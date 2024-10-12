'use client'

import ProjectCard from '@/components/project/project-card'
import { useTranslations } from 'next-intl'
import Section from '@/components/ui/section'
import { memo, Suspense } from 'react'
import useProject from '@/hooks/useProject'
import Loading from '@/app/[locale]/loading'

function Projects() {
  const t = useTranslations('Projects')

  const { projects } = useProject()

  return (
    <Section
      id="projects"
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
    >
      <Suspense fallback={<Loading />}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Suspense>
    </Section>
  )
}

export default memo(Projects)
