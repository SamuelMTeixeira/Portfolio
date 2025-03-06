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
      className="relative min-h-[80vh] pt-10 flex flex-col justify-center items-center gap-4 container mx-auto"
    >

      <h1 className="text-center mt-6 font-extrabold font-bricolage text-5xl max-w-5xl md:text-6xl md:max-w-6xl">
        {t('title')}
      </h1>
      <p className="text-center font-normal text-lg max-w-md md:text-xl md:max-w-xl lg:text-xl lg:max-w-6xl">
        {t('description')}
      </p>

      <div className="flex gap-4 flex-col md:flex-row mt-4">
        <Link href="#contact" aria-label="Get in touch">
          <Button size="xl" className="w-full">
            {t('primaryButton')}
          </Button>
        </Link>

        <Link href="#projects" aria-label="See portfolio projects">
          <Button size="xl" variant="outline" className="w-full">
            {t('secondaryButton')}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
