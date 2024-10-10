'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import anime from 'animejs'

export default function Loading() {
  const animate = () =>
    anime
      .timeline()
      .add({
        targets: '#logo',
        delay: 0,
        scale: [1, 1.2],
        duration: 500,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#logo',
        scale: [1.2, 1],
        duration: 500,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#logo',
        scale: [1, 1.3],
        duration: 600,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#logo',
        scale: [1.3, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '#logo',
        scale: [1, 1.25],
        duration: 700,
        easing: 'easeInOutExpo',
      })
      .add({
        targets: '#logo',
        scale: [1.25, 1],
        duration: 700,
        easing: 'easeOutExpo',
      })
      .add({
        targets: '#logo',
        rotateY: '+=360',
        duration: 1500,
        easing: 'easeInOutExpo',
        delay: 1200,
      })

  useEffect(() => {
    const timeout = setTimeout(() => {}, 1000)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        id="logo"
        src="/logo-128x128.png"
        alt=""
        width={128}
        height={128}
      />
    </div>
  )
}