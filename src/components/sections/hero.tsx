'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Draggable } from '@/components/ui/draggable'
import Image from 'next/image'
import select from '@/assets/img/hero/select-pointer.svg'
import kube from '@/assets/img/hero/kube.svg'
import compass from '@/assets/img/hero/compass.svg'
import pencil from '@/assets/img/hero/pencil.svg'
import cloud from '@/assets/img/hero/cloud.svg'
import tags from '@/assets/img/hero/tags.svg'

export default function Hero() {
  const t = useTranslations('Hero')
  const containerRef = useRef(null)

  return (
    <motion.div
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center gap-4"
    >
      <Draggable
        dragConstraints={containerRef}
        className=" top-[12vh] left-[12rem]"
        name={t('backend')}
        image={<Image src={tags} alt="Select pointer icon" width={50} />}
      />

      <Draggable
        dragConstraints={containerRef}
        className="top-[42vh] left-[3rem]"
        name={t('cloud')}
        image={<Image src={cloud} alt="Select pointer icon" width={40} />}
      />

      <Draggable
        dragConstraints={containerRef}
        className="top-[78vh] left-[12rem]"
        name={t('tests')}
        image={<Image src={compass} alt="Select pointer icon" />}
      />

      <Draggable
        dragConstraints={containerRef}
        className="top-[4rem] right-[8rem]"
        name={t('frontend')}
        image={<Image src={kube} alt="Select pointer icon" />}
      />

      <Draggable
        dragConstraints={containerRef}
        className="top-[22rem] right-[4rem]"
        name={t('accessibility')}
        image={<Image src={select} alt="Select pointer icon" />}
      />

      <Draggable
        dragConstraints={containerRef}
        className="top-[78vh] right-[12rem]"
        name={t('prototyping')}
        image={<Image src={pencil} alt="Select pointer icon" />}
      />

      <h1 className="text-center font-extrabold font-bricolage text-5xl max-w-5xl md:text-6xl md:max-w-6xl">
        {t('title')}
      </h1>
      <p className="text-center font-normal text-lg max-w-md md:text-xl md:max-w-xl lg:text-xl lg:max-w-6xl">
        {t('description')}
      </p>

      <div className="flex gap-4 flex-col md:flex-row mt-4">
        <a href="#contact">
          <Button size={'xl'} className="w-full">
            {t('primaryButton')}
          </Button>
        </a>

        <a href="#projects">
          <Button size={'xl'} variant={'outline'} className="w-full">
            {t('secondaryButton')}
          </Button>
        </a>
      </div>
    </motion.div>
  )
}
