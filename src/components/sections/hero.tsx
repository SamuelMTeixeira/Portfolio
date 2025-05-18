'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const t = useTranslations('Hero')
  const containerRef = useRef(null)

  return (
    <motion.div
      ref={containerRef}
      id="hero"
      className="relative min-h-[85vh] pt-10 flex flex-col justify-center items-center space-y-6 px-4 sm:px-6 md:px-12 container mx-auto"
    >

        <h1 className="mt-12 text-center font-extrabold font-bricolage text-3xl sm:text-4xl md:text-5xl max-w-md sm:max-w-xl md:max-w-5xl">
          {t('title')}
        </h1>
        <p className="text-center font-normal text-base sm:text-lg md:text-xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
          {t('description')}
        </p>

      <div className="flex gap-4 flex-col md:flex-row">
        <Button
          size="xl"
          aria-label='Get in touch'
          asChild>
          <Link className='w-auto' href="#contact" aria-label="Get in touch">
            {t('primaryButton')}
          </Link>
        </Button>

        <Button
          size="xl"
          variant="outline"
          aria-label='See portfolio projects'
          asChild>
          <Link className='w-auto' href="#projects" aria-label="See portfolio projects">
            {t('secondaryButton')}
          </Link>
        </Button>


      </div>
    </motion.div>
  )
}
