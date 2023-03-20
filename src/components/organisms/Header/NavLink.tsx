import { Link } from "@components/atoms"
import { LinkProps } from "@chakra-ui/react"

interface INavItem extends LinkProps {
    children: string;
    href: string;
}

export default function NavLink({ children, href, ...props }: INavItem) {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            color={'whiteAlpha.800'}
            _hover={{
                textDecoration: 'none',
                color: 'white'
            }}
            mx={4}
            href={href}
            {...props}>
            {children}
        </Link>
    )
}