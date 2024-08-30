'use client'

import preview from '@/assets/img/project-previews/preview.png'
import preview2 from '@/assets/img/project-previews/preview-2.png'
import ProjectCard, { ProjectCardProps } from '@/components/ui/projectcard'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const projects: ProjectCardProps[] = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    imageUrl: preview,
    previewUrl: 'https://google.com',
    sourceUrl: 'https://google.com',
    type: 'Web Application',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    imageUrl: preview2,
    previewUrl: 'https://google.com',
    type: 'Web Application',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    imageUrl: preview,
    sourceUrl: 'https://google.com',
    type: 'Web Application',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
]

export default function Projects() {
  const t = useTranslations('Projects')

  return (
    <section
      id="projects"
      className="container mx-auto flex flex-col justify-center items-center"
    >
      <div className="space-y-4 mb-12">
        <h6 className="text-primary font-semibold font-bricolage text-md text-center flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            width={16}
            height={16}
            alt="Website logo"
            className="w-4 h-4"
          />

          {t('subtitle')}
        </h6>

        <h3 className="text-center font-bricolage font-bold text-3xl sm:text-4xl lg:text-5xl">
          {t('title')}
        </h3>

        <p className="text-center font-manrope font-normal text-lg">
          {t('description')}
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
