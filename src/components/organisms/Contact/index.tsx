// Hooks
import { useState } from 'react'
import { EmailProps, useEmail, useForm } from '@/features/email'
import { SubmitHandler } from 'react-hook-form'

// Form
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
} from '@chakra-ui/react'

// Molecules
import { Section } from '@components/molecules'
import Lottie from 'lottie-react'
import SucessAlert from './SucessAlert'

// Assets
import contactAnimation from '@assets/lottie/contact.json'
import { Mail, User } from 'react-feather'

export default function Contact() {
  const { handleSubmit, register } = useForm()

  const [showAlert, setShowAlert] = useState<boolean>(false)

  const { sendEmail, success, error } = useEmail()

  const onSubmit: SubmitHandler<EmailProps> = async (formData) => {
    await sendEmail({
      form: formData,
      publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || '',
      serviceId: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
      templateId: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '',
    })

    if (error) {
      console.error(error)
    }
    if (success) {
      setShowAlert(true)
    }
  }

  return (
    <Section
      id="contact"
      title="Entrar em contato"
      subtitle="Vamos transformar suas ideias em realidade?"
      mt={12}
    >
      <Flex
        mt={4}
        gap={10}
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'space-evenly'}
      >
        <Box
          pointerEvents={'none'}
          w={{ base: '100%', sm: '80%', md: '60%', lg: '50%', xl: '55%' }}
          display={{ base: 'none', md: 'flex' }}
        >
          <Lottie
            width={'70%'}
            animationData={contactAnimation}
            autoPlay
            loop
          />
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
          shadow="base"
          as={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl isRequired>
            <FormLabel>Nome</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <User size={20} />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Seu nome"
                {...register('name')}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Mail size={20} />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Seu Email"
                {...register('email')}
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mensagem</FormLabel>

            <Textarea
              {...register('message')}
              placeholder="Escreva sua mensagem"
              rows={5}
              resize="none"
            />
          </FormControl>

          <Button type={'submit'} variant={'catchy'}>
            Enviar mensagem
          </Button>

          {showAlert ? (
            <SucessAlert
              onClose={() => setShowAlert(false)}
              message="A mensagem foi encaminhada e em breve será respondida"
            />
          ) : null}
        </Flex>
      </Flex>
    </Section>
  )
}
