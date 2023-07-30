import { Button as Btn, ButtonProps } from '@chakra-ui/react'

export default function Button({ children, ...props }: ButtonProps) {
  return <Btn {...props}>{children}</Btn>
}
