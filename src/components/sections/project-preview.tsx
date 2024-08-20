'use client'

import preview from '@/assets/img/project-previews/preview.png'
import preview2 from '@/assets/img/project-previews/preview-2.png'
import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectPreview() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <div className="overflow-x-hidden mt-10" ref={containerRef}>
      <motion.div className="flex items-center flex-row gap-5" style={{ x }}>
        <Image
          src={preview}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />

        <Image
          src={preview2}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />

        <Image
          src={preview}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />

        <Image
          src={preview2}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />

        <Image
          src={preview}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />

        <Image
          src={preview2}
          className="rounded-md"
          alt="Project preview"
          width={400}
          height={400}
        />
      </motion.div>
    </div>
  )
}
