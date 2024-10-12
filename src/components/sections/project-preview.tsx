'use client'

import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion'
import { memo, Suspense, useMemo, useRef } from 'react'
import useProject from '@/hooks/useProject'
import Loading from '@/app/[locale]/loading'

function ProjectPreview() {
  const { projects } = useProject()

  const projectImages = useMemo(
    () => projects.map(({ imageUrl }) => imageUrl),
    [projects],
  )

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <Suspense fallback={<Loading />}>
      <div className="overflow-x-hidden mt-10" ref={containerRef}>
        <motion.div className="flex items-center flex-row gap-5" style={{ x }}>
          {projectImages.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              className="rounded-md w-[370px] h-[256px]"
              alt="Project preview"
              width={470}
              height={356}
              priority
            />
          ))}
        </motion.div>
      </div>
    </Suspense>
  )
}

export default memo(ProjectPreview)
