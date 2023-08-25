import { Text as Txt, TextProps } from '@chakra-ui/react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400'] })

export default function Text({
  children,
  fontSize,
  fontWeight,
  ...props
}: TextProps) {
  const weight = fontWeight || 'normal'

  return (
    <Txt
      className={inter.className}
      fontSize={fontSize || 'md'}
      fontWeight={weight}
      {...props}
    >
      {children}
    </Txt>
  )
}
