'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface DraggableProps extends HTMLMotionProps<'div'> {
  name: string
  image: ReactNode
}

export function Draggable({
  dragConstraints,
  className,
  name,
  image,
  ...props
}: DraggableProps) {
  return (
    <motion.div
      className={
        'absolute hidden lg:block cursor-grab active:cursor-grabbing ' +
        className
      }
      drag
      dragConstraints={dragConstraints}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
      dragSnapToOrigin
      {...props}
    >
      <div className="relative flex flex-col items-center gap-2 pointer-events-none">
        {image}
        <span>{name}</span>
      </div>
    </motion.div>
  )
}
