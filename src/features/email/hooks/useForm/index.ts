import { useForm as formHook } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import EmailProps, { EmailSchema } from '../../types/EmailProps'

const initialFormData = {
  name: '',
  email: '',
  message: '',
}

function useForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = formHook<EmailProps>({
    resolver: zodResolver(EmailSchema),
    defaultValues: initialFormData,
  })

  return { register, handleSubmit, errors, isSubmitting, isSubmitted }
}

export default useForm
