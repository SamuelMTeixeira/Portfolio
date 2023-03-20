import NextLink from 'next/link'
import { Link as LinkBase, LinkProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ILink extends LinkProps {
    children: ReactNode;
    href: string;
}

export default function Link({ children, href, ...props }: ILink) {
    return (
        <LinkBase as={NextLink} href={href} {...props}>
            {children}
        </LinkBase>
    )
}