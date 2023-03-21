import { Flex } from "@chakra-ui/react";
import { Title, Text, Button, Link } from "@components/atoms";

export default function Introduction() {
    return (
        <Flex as="section"
            minHeight={'100vh'}
            direction={'column'}
            justify={'center'}
            mx={10}
            gap={0}>

            <Title
                as={'h2'}
                position={'relative'}
                color={'golden.500'}
                textDecoration={"underline"}
                textAlign={{ base: "center", md: "start" }}
                fontSize={{ base: "md", sm: "xl", md: "xl" }}
                textUnderlineOffset={"6px"}>
                Olá! meu nome é Samuel Teixeira
            </Title>

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
                <Button variant={'catchy'} py={6} px={4}>
                    <Link href='#contact' _hover={{
                        textDecoration: 'none'
                    }}>
                        Entrar em contato
                    </Link>
                </Button>
            </Flex>




        </Flex>
    )
}