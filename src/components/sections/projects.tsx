'use client'

import ProjectCard from '@/components/ui/projectcard'
import useProject from '@/hooks/useProject'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import console from '@/assets/img/console.png'

export default function Projects() {
  const t = useTranslations('Projects')

  const { data } = useProject()

  return (
    <section
      id="projects"
      className="container mx-auto flex flex-col justify-center items-center"
    >
      <div className="space-y-4 mb-12">
        <h6 className="text-primary font-semibold font-bricolage text-md text-center flex items-center justify-center gap-3">
          <Image
            src={console}
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
        {data?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
