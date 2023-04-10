import { Flex } from "@chakra-ui/react";
import { Title, Text, Link } from "@components/atoms";
import { Section } from '@components/molecules'

export default function Introduction() {
    return (
        <Section
            id="home"
            fullSize
            justify={'center'}>

            <Flex
                justify={{ base: "center", md: "flex-start" }}
                gap={2}>
                <Title
                    as={'h2'}
                    position={'relative'}
                    fontSize={{ base: "sm", sm: "md", md: "2xl" }}>
                    👋
                </Title>

                <Title
                    as={'h2'}
                    position={'relative'}
                    color={'golden.500'}
                    textDecoration={"underline"}
                    fontSize={{ base: "sm", sm: "md", md: "2xl" }}
                    textUnderlineOffset={{ base: 4, md: 8, lg: 9 }}>
                    Olá! meu nome é Samuel Teixeira
                </Title>
            </Flex>

            <Title
                as={"h1"}
                fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: '6xl' }}
                mt={2}
                maxW={"5xl"}
                textAlign={{ base: "center", md: "start" }}
                lineHeight={"initial"}>
                Transformo ideias em soluções tecnológicas disruptivas
            </Title>

            <Text
                maxW={"2xl"}
                textAlign={{ base: "justify", md: "start" }}
                mt={4}
                color={"gray.400"}>
                Sou um desenvolvedor especializado em desenvolvimento web e mobile, com habilidades em JavaScript,
                React, Node.js e outras tecnologias.
                Além disso, sou um grande apreciador de café e acredito que uma boa pausa para um café
                pode ajudar a manter a produtividade e a criatividade.
            </Text>


            <Flex mt={4} direction={{ base: "column", md: "row" }}>

                <Link
                    textAlign={'center'}
                    variant={'catchy'}
                    href='#contact'>
                    Entrar em contato
                </Link>

            </Flex>




        </Section>
    )
}