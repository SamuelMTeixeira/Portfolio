import { Flex, FlexProps } from "@chakra-ui/react";

interface ISection extends FlexProps {
    id: string;
    fullSize?: boolean
}

export default function ({ children, id, fullSize, ...props }: ISection) {

    return (
        <Flex
            as="section"
            minHeight={fullSize ? '100vh' : 'auto'}
            direction={'column'}
            id={id}
            {...props}>
            {children}
        </Flex>
    )
}