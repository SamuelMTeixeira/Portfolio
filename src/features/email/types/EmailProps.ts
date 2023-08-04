import { z } from 'zod'

export const EmailSchema = z.object({
  name: z.string().min(1, { message: 'Must be 5 or more characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(1, { message: 'Must be 5 or more characters long' }),
})

type EmailProps = z.infer<typeof EmailSchema>

export default EmailProps
