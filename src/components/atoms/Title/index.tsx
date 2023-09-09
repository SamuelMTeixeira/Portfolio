import { inter } from '@/app/fonts'
import { Heading, HeadingProps } from '@chakra-ui/react'

export default function Title({
  children,
  fontSize,
  fontWeight,
  ...props
}: HeadingProps) {
  const size = fontSize || '2xl'
  const weight = fontWeight || 'bold'

  return (
    <Heading
      className={inter.className}
      fontSize={size}
      fontWeight={weight}
      {...props}
    >
      {children}
    </Heading>
  )
}
