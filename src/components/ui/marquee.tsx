import { ReactNode, useRef, useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  direction?: 'left' | 'right'
  className?: string
}

const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 20,
  direction = 'left',
  className,
}) => {
  const [contentWidth, setContentWidth] = useState(0)
  const [repeatCount, setRepeatCount] = useState(10)
  const contentRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const singleContentWidth = contentRef.current.offsetWidth
      setContentWidth(singleContentWidth)

      const needed = Math.ceil(containerWidth / singleContentWidth) + 1
      setRepeatCount(needed)
    }
  }, [children])

  useEffect(() => {
    if (contentWidth > 0) {
      const duration = contentWidth / speed
      controls.start({
        x: direction === 'left'
          ? -contentWidth
          : 0,
        transition: {
          duration,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }
  }, [contentWidth, speed, direction, controls])

  return (
    <div
      ref={containerRef}

      className={'m-auto overflow-hidden ' + className}
    >
      <motion.div className="flex whitespace-nowrap gap-5" animate={controls}>
        {[...Array(repeatCount)].map((_, index) => (
          <div
            key={index}
            ref={index === 0
              ? contentRef
              : undefined}
            className="flex items-center gap-8 shrink-0"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee
