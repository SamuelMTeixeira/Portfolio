import {
  Card as CardBase,
  CardProps,
  CardBody,
  CardFooter,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'

import { Button, Title, Link, IconLink, Image } from '@components/atoms'
import { StaticImageData } from 'next/image'
import { Eye, GitHub, Info } from 'react-feather'
import ModalBox from './Modal'

interface ICard extends CardProps {
  title: string
  repo?: string
  preview?: string
  description: string
  image: string | StaticImageData
}

export default function Card({
  title,
  description,
  preview,
  repo,
  image,
  ...props
}: ICard) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isDisabled = !!repo

  return (
    <>
      <CardBase
        width={{ base: 'xs', sm: 'sm', md: 'md', xl: 'lg' }}
        bg={'dark_slate.900'}
        color={'white'}
        boxShadow={'sm'}
        borderRadius={'lg'}
        {...props}
      >
        <Image
          src={image}
          alt="Preview do projeto"
          width={200}
          height={200}
          style={{
            objectFit: 'cover',
            borderTopRightRadius: '0.5rem',
            borderTopLeftRadius: '0.5rem',
            width: '100%',
          }}
        />
        <CardBody py={4}>
          <Flex align={'center'} justify={'space-between'}>
            <Title fontSize={{ base: 'lg', md: 'xl' }} lineHeight={'initial'}>
              {title}
            </Title>

            <IconLink
              isDisable={!isDisabled}
              icon={<GitHub size={20} />}
              href={repo || ''}
              target="_blank"
              label={'Ver código base'}
            />
          </Flex>
        </CardBody>

        <CardFooter
          p={2}
          pt={0}
          justify="space-between"
          flexWrap="wrap"
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button
            onClick={onOpen}
            variant="ghost"
            color={'white'}
            fontWeight={'bold'}
            flex="1"
            borderRadius={'md'}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            _hover={{
              textDecoration: 'none',
              bg: 'dark_slate.800',
            }}
            p={2}
          >
            <Info size={19} />
            Detalhes
          </Button>

          <Link
            fontWeight={'bold'}
            flex="1"
            borderRadius={'md'}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
            _hover={{
              textDecoration: 'none',
              bg: 'dark_slate.800',
            }}
            p={2}
            pointerEvents={preview ? 'auto' : 'none'}
            color={preview ? 'white' : 'whiteAlpha.400'}
            href={preview || '#'}
            target="_blank"
          >
            <Eye size={19} />
            Preview
          </Link>
        </CardFooter>
      </CardBase>

      <ModalBox isOpen={isOpen} onClose={onClose} description={description} />
    </>
  )
}
