import { Flex } from "@chakra-ui/react";
import { Title, Text, Button } from "@components/atoms";

export default function Introduction() {
    return (
        <Flex as="section"
            minHeight={'100vh'}
            direction={'column'}
            justify={'center'}
            mx={10}>

            <Title
                as={'h2'}
                position={'relative'}
                color={'golden.500'}
                textDecoration={"underline"}
                fontSize={"xl"}
                textUnderlineOffset={"6px"}>
                Olá, meu nome é Samuel M. Teixeira
            </Title>

            <Title as={"h1"} fontSize={'5xl'} mt={2}>
                Transformo ideias em soluções tecnológicas disruptivas
            </Title>

            <Text maxW={"2xl"} mt={4}>
                Sou um desenvolvedor especializado em desenvolvimento web e mobile, com habilidades em JavaScript,
                React, Node.js e outras tecnologias.
                Além disso, sou um grande apreciador de café e acredito que uma boa pausa para um café
                pode ajudar a manter a produtividade e a criatividade.
            </Text>


            <Flex mt={4}>
                <Button variant={'catchy'}>Entrar em contato</Button>
            </Flex>

        </Flex>
    )
}