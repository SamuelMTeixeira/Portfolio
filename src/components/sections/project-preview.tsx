'use client'

import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectPreview({
  data,
}: {
  data: string[] | undefined
}) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <div className="overflow-x-hidden mt-10" ref={containerRef}>
      <motion.div className="flex items-center flex-row gap-5" style={{ x }}>
        {data?.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            className="rounded-md w-[370px] h-[256px]"
            alt="Project preview"
            width={470}
            height={356}
          />
        ))}
      </motion.div>
    </div>
  )
}
