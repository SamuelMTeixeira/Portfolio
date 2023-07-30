// Hooks
import { useState } from 'react'
import { useEmail } from '@/features/email'

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

interface FormProps {
  name: string
  email: string
  message: string
}

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState<FormProps>(initialFormData)

  const [showAlert, setShowAlert] = useState<boolean>(false)

  const { sendEmail, success, error } = useEmail()

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement | HTMLDivElement>,
  ) => {
    event.preventDefault()

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
      setFormData(initialFormData)
      setShowAlert(true)
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
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
        >
          <Lottie
            width={'100%'}
            animationData={contactAnimation}
            autoPlay
            loop
            initialSegment={[20, 91]}
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
          onSubmit={handleSubmit}
        >
          <FormControl isRequired>
            <FormLabel>Nome</FormLabel>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <User size={20} />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Seu nome"
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
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Seu Email"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mensagem</FormLabel>

            <Textarea
              onChange={handleChange}
              name="message"
              placeholder="Escreva sua mensagem"
              value={formData.message}
              rows={5}
              resize="none"
            />
          </FormControl>

          <Button
            type={'submit'}
            variant={'catchy'}
          >
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
