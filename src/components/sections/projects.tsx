'use client'

import ProjectCard from '@/components/project/project-card'
import { useTranslations } from 'next-intl'
import { ProjectProps } from '@/services/projects'
import Section from '@/components/ui/section'

export default function Projects({
  data,
}: {
  data: ProjectProps[] | undefined
}) {
  const t = useTranslations('Projects')

  return (
    <Section
      id="projects"
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
    >
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  )
}
