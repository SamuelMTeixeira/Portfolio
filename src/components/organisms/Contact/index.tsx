import {
    Box, 
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';

import { Section } from "@components/molecules";

import Lottie from 'react-lottie';
import contactAnimation from '@assets/lottie/contact.json'

import { Mail, User } from 'react-feather';

export default function Contact() {
    return (
        <Section
            id="contact"
            title="Entrar em contato"
            subtitle="Vamos transformar suas ideias em realidade?"
            mt={12}>

            <Flex
                mt={4}
                gap={10}
                direction={{ base: 'column', md: 'row' }}
                align={'center'}
                justify={'space-evenly'}>

                <Box
                    pointerEvents={'none'}
                    w={{ base: '100%', sm: '80%', md: '60%', lg: '50%', xl: '55%' }}>

                    <Lottie
                        width={'100%'}
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: contactAnimation
                        }}
                        isStopped={false}
                        isPaused={false} />
                </Box>

                <Flex
                    flex={1}
                    gap={5}
                    borderRadius="lg"
                    p={8}
                    mx={{ base: 0, md: 0, lg: 5 }}
                    direction={'column'}
                    bg={'dark_slate.900'}
                    color={'white'}
                    shadow="base">


                    <FormControl isRequired>
                        <FormLabel>Nome</FormLabel>

                        <InputGroup>
                            <InputLeftElement children={<User size={20} />} />
                            <Input type="text" name="name" placeholder="Seu nome" />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>

                        <InputGroup>
                            <InputLeftElement children={<Mail size={20} />} />
                            <Input type="email" name="email" placeholder="Seu Email" />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Mensagem</FormLabel>

                        <Textarea
                            name="message"
                            placeholder="Escreva sua mensagem"
                            rows={5}
                            resize="none"
                        />
                    </FormControl>

                    <Button bg={'dark_slate.800'} _hover={{ bg: 'dark_slate.700' }}>Enviar mensagem</Button>

                </Flex>


            </Flex >

        </Section >
    )
}