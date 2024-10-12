'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import select from '@/assets/img/hero/select-pointer.svg'
import kube from '@/assets/img/hero/kube.svg'
import compass from '@/assets/img/hero/compass.svg'
import pencil from '@/assets/img/hero/pencil.svg'
import cloud from '@/assets/img/hero/cloud.svg'
import tags from '@/assets/img/hero/tags.svg'
import dynamic from 'next/dynamic'
const Draggable = dynamic(
  () => import('@/components/ui/draggable').then((mod) => mod.Draggable),
  {
    ssr: false,
  },
)

const draggableItems = [
  {
    nameKey: 'backend',
    src: tags,
    size: 50,
    className: 'top-[12vh] left-[12rem]',
  },
  {
    nameKey: 'cloud',
    src: cloud,
    size: 40,
    className: 'top-[42vh] left-[3rem]',
  },
  {
    nameKey: 'tests',
    src: compass,
    size: 50,
    className: 'top-[78vh] left-[12rem]',
  },
  {
    nameKey: 'frontend',
    src: kube,
    size: 50,
    className: 'top-[4rem] right-[8rem]',
  },
  {
    nameKey: 'accessibility',
    src: select,
    size: 50,
    className: 'top-[22rem] right-[4rem]',
  },
  {
    nameKey: 'prototyping',
    src: pencil,
    size: 50,
    className: 'top-[78vh] right-[12rem]',
  },
]

export default function Hero() {
  const t = useTranslations('Hero')
  const containerRef = useRef(null)

  return (
    <motion.div
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center gap-4 container mx-auto"
    >
      {draggableItems.map(({ nameKey, src, size, className }) => (
        <Draggable
          key={nameKey}
          dragConstraints={containerRef}
          className={className}
          name={t(nameKey)}
          image={<Image src={src} alt={`${t(nameKey)} icon`} width={size} />}
        />
      ))}

      <h1 className="text-center font-extrabold font-bricolage text-5xl max-w-5xl md:text-6xl md:max-w-6xl">
        {t('title')}
      </h1>
      <p className="text-center font-normal text-lg max-w-md md:text-xl md:max-w-xl lg:text-xl lg:max-w-6xl">
        {t('description')}
      </p>

      <div className="flex gap-4 flex-col md:flex-row mt-4">
        <a href="#contact" aria-label="Get in touch">
          <Button size="xl" className="w-full">
            {t('primaryButton')}
          </Button>
        </a>

        <a href="#projects" aria-label="See portfolio projects">
          <Button size="xl" variant="outline" className="w-full">
            {t('secondaryButton')}
          </Button>
        </a>
      </div>
    </motion.div>
  )
}
