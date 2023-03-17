import { Text as Txt, TextProps } from '@chakra-ui/react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'] })

interface ITitle extends TextProps {
    children: string;
}

export default function Title({ children, fontSize, fontWeight, ...props }: ITitle) {

    const size = fontSize || "2xl"
    const weight = fontWeight || "bold"

    return (
        <Txt className={inter.className} fontSize={size} fontWeight={weight} {...props}>
            {children}
        </Txt>
    )
}