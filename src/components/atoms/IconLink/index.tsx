import { Link } from "@components/atoms"
import { IconButton, LinkProps, Tooltip } from "@chakra-ui/react"
import { ReactElement } from "react";

interface ItemProps extends LinkProps {
    href: string;
    label: string;
    icon: ReactElement;
}

export default function IconLink({ href, label, icon, ...props }: ItemProps) {
    return (
        <Link href={href} {...props}>
            <Tooltip label={label} aria-label={label} placement='right'>
                <IconButton
                    bg={"transparent"}
                    _hover={{
                        bg: "transparent",
                        color: "golden.500"
                    }}
                    icon={icon}
                    aria-label={label} />
            </Tooltip>
        </Link>
    )
}