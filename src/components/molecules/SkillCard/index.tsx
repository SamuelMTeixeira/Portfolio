import { Box, Flex } from "@chakra-ui/react";
import { Title, Text } from "@components/atoms";
import { Code } from "react-feather";


interface ISkillBox {
    title: string;
    description: string;
}

export default function SkillBox({ title, description, ...props }: ISkillBox) {
    return (
        <Flex
            boxShadow={'xl'}
            bg={'dark_slate.900'}
            p={5}
            borderRadius={'xl'}
            maxWidth={'500px'}
            gap={5}
            {...props}>

            <Box>
                <Flex
                    p={5}
                    bg={'blue.300'}
                    borderRadius={'full'}
                    align={'center'}
                    justify={'center'}
                >
                    <Code size={20} />
                </Flex>
            </Box>

            <Title>{title}</Title>

        </Flex>
    )
}