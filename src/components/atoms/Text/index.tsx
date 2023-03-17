import { Text as Txt, TextProps } from '@chakra-ui/react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400'] })

interface IText extends TextProps {
    children: string;
}

export default function Text({ children, fontSize, fontWeight, ...props }: IText) {

    const size = fontSize || "md"
    const weight = fontWeight || "normal"

    return (
        <Txt className={inter.className} fontSize={size} fontWeight={weight} {...props}>
            {children}
        </Txt>
    )
}