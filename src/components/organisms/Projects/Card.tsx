// Card components
import {
    Card as CardBase,
    CardProps,
    CardBody,
    CardFooter,
    Flex,
    Image,
} from '@chakra-ui/react'

// Modal components
import { useDisclosure } from '@chakra-ui/react'

import { Button, Title, Link, IconLink } from '@components/atoms'
import { Eye, GitHub, Info } from 'react-feather';
import ModalBox from './Modal';

interface ICard extends CardProps {
    title: string;
    repo?: string;
    preview?: string;
    description: string;
    image: string;
}

export default function Card({ title, description, preview, repo, image, ...props }: ICard) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>

            <CardBase
                width={'lg'}
                bg={"dark_slate.900"}
                color={'white'}
                boxShadow={'sm'}
                {...props}>

                <Image
                    objectFit='cover'
                    borderTopRadius={"md"}
                    src={image}
                    alt='Imagem'
                    height={250}
                />

                <CardBody py={4}>

                    <Flex align={'center'} justify={'space-between'}>
                        <Title fontSize={'xl'}>{title}</Title>

                        <IconLink
                            pointerEvents={repo ? 'auto' : 'none'}
                            color={repo ? "white" : 'whiteAlpha.400'}
                            icon={<GitHub size={20} />}
                            href={repo ? repo : '#'}
                            target="_blank"
                            label={'Ver código base'} />


                    </Flex>

                </CardBody>

                <CardFooter
                    p={2}
                    pt={0}
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >


                    <Button
                        onClick={onOpen}
                        variant='ghost'
                        fontWeight={'bold'}
                        flex='1'
                        borderRadius={'md'}
                        display='flex'
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={2}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'dark_slate.800'
                        }}
                        p={2} >

                        <Info size={19} />
                        Detalhes

                    </Button>

                    <Link
                        fontWeight={'bold'}
                        flex='1'
                        borderRadius={'md'}
                        display='flex'
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={2}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'dark_slate.800'
                        }}
                        p={2}
                        pointerEvents={preview ? 'auto' : 'none'}
                        color={preview ? "white" : 'whiteAlpha.400'}
                        href={preview ? preview : '#'}
                        target="_blank">

                        <Eye size={19} />

                        Preview
                    </Link>
                </CardFooter>
            </CardBase >

            <ModalBox
                isOpen={isOpen}
                onClose={onClose}
                description={description} />

        </>
    )
}


