'use client'

import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion'
import { memo, Suspense, useMemo, useRef } from 'react'
import useProject from '@/hooks/useProject'
import Loading from '@/app/[locale]/loading'

function ProjectOverview() {
  const { projects } = useProject()

  const projectImages = useMemo(
    () => projects.map(({ imageUrl }) => imageUrl),
    [projects],
  )

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef || undefined,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.8])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.95])

  return (
    <motion.div
      className="overflow-x-hidden mt-10"
      ref={containerRef}
      style={{ opacity, scale }}>
      <Suspense fallback={<Loading />}>
        <motion.div className="flex items-center flex-row gap-5" style={{ x }}>
          {projectImages.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              className="rounded-md w-92.5 h-64"
              alt="Project preview"
              width={470}
              height={356}
              priority
            />
          ))}
        </motion.div>
      </Suspense>
    </motion.div>
  )
}

export default memo(ProjectOverview)
