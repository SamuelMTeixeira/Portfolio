import { Text as Txt, TextProps } from '@chakra-ui/react'

export default function Text({
  children,
  fontSize,
  fontWeight,
  ...props
}: TextProps) {
  const weight = fontWeight || 'normal'

  return (
    <Txt fontSize={fontSize || 'md'} fontWeight={weight} {...props}>
      {children}
    </Txt>
  )
}
