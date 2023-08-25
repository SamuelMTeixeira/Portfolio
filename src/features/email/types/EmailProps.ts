import { z } from 'zod'

export const EmailSchema = z.object({
  name: z.string().nonempty('Seu nome precisa ser preenchido'),
  email: z
    .string()
    .nonempty('O email precisa ser preenchido')
    .email('Endereço de email inválido')
    .toLowerCase(),
  message: z
    .string()
    .nonempty('A mensagem precisa ser preenchido')
    .min(5, 'A mensagem deve ter no mínimo 5 caracteres'),
})

type EmailProps = z.infer<typeof EmailSchema>

export default EmailProps
