import { EmailProps, sendEmail } from '@/services/email'
import { useMutation } from '@tanstack/react-query'

export default function useEmail() {
  const { isSuccess, isError, mutate, error, isPending } = useMutation({
    mutationFn: (data: EmailProps) => sendEmail(data),
  })

  return {
    isSuccess,
    isError,
    sendRequest: mutate,
    error,
    isPending,
  }
}
