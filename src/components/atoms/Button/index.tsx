import {
    Button as Btn, ButtonProps
} from '@chakra-ui/react'
import { MutableRefObject } from 'react'


interface IButton extends ButtonProps {
    ref?: MutableRefObject<any>;
}

export default function Button({ children, ...props }: IButton) {
    return (
        <Btn {...props}>
            {children}
        </Btn>
    )
}