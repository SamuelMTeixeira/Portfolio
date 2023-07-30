import { Link } from '@components/atoms'
import { IconButton, LinkProps, Tooltip } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface ItemProps extends LinkProps {
  href: string
  label: string
  icon: ReactElement
  isDisable?: boolean
}

export default function IconLink({
  href,
  label,
  icon,
  isDisable,
  ...props
}: ItemProps) {
  return (
    <Link href={href} pointerEvents={isDisable ? 'none' : 'auto'} {...props}>
      <Tooltip label={label} aria-label={label} placement="right">
        <IconButton
          bg={'transparent'}
          color={isDisable ? 'whiteAlpha.400' : 'white'}
          _hover={{
            bg: 'transparent',
            color: 'golden.500',
          }}
          icon={icon}
          aria-label={label}
        />
      </Tooltip>
    </Link>
  )
}
