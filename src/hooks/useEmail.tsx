import { EmailProps, sendEmail } from '@/services/email'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MailRemove02Icon, MailValidation01Icon } from 'hugeicons-react'

export default function useEmail() {
  const t = useTranslations('Getintouch')
  const emailSchema = z.object({
    name: z
      .string({
        required_error: t('form.name.errors.required'),
      })
      .min(2, {
        message: t('form.name.errors.minLength'),
      })
      .max(50, {
        message: t('form.name.errors.maxLength'),
      }),
    email: z
      .string({
        required_error: t('form.email.errors.required'),
      })
      .email({
        message: t('form.email.errors.invalid'),
      }),
    message: z
      .string({
        required_error: t('form.message.errors.required'),
      })
      .min(10, {
        message: t('form.message.errors.minLength'),
      })
      .max(500, {
        message: t('form.message.errors.maxLength'),
      }),
  })

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const { mutate, ...others } = useMutation({
    mutationFn: (data: EmailProps) => sendEmail(data),
    onSuccess: () => {
      toast(t('emailStatus.success'), {
        icon: <MailValidation01Icon className="h-4 text-green-600" />,
        duration: 3000,
        className: 'text-green-500',
      })

      form.reset()
    },
    onError: () => {
      toast.error(t('emailStatus.error'), {
        icon: <MailRemove02Icon className="h-4 text-red-600" />,
        duration: 3000,
        className: 'text-green-500',
      })
    },
  })

  return {
    sendRequest: mutate,
    emailSchema,
    form,
    ...others,
  }
}
