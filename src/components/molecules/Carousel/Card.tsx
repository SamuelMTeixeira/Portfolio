import { ReactNode } from "react";
import { Text, Title } from '@components/atoms';

import { Box, Card, CardBody, Flex } from '@chakra-ui/react';

interface Card {
    title: string;
    description: string;
    languages: string;
    tools?: Array<string>;
    Icon: ReactNode;
}

export default function SkillCard({ title, description, languages, tools, Icon }: Card) {
    return (
        <Card
            h={'full'}
            bg={'dark_slate.900'}
            shadow={'lg'}
            color={'white'}
            rounded={'3xl'}
            p={6}>
            <CardBody textAlign={'center'}>

                <Flex justify={'center'}>
                    <Box bg={"blue.500"} p={5} rounded={'full'}>
                        {Icon}
                    </Box>
                </Flex>

                <Title mt={2} fontSize={{base: 'lg', sm: 'xl' ,md: '2xl'}}>{title}</Title>
                <Text>{description}</Text>

                <Title fontSize={'lg'} mt={4}>Linguagens e Frameworks</Title>
                <Text>{languages}</Text>

                <Title fontSize={'lg'} mt={4}>Ferramentas</Title>
                {
                    tools?.map((tool, index) => (
                        <Text key={index}>{tool}</Text>
                    ))
                }


            </CardBody>
        </Card>
    )
}