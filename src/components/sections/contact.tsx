'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Projects() {
  const t = useTranslations('Getintouch')

  const formSchema = z.object({
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit({
    email,
    message,
    name,
  }: z.infer<typeof formSchema>) {
    const { ok } = await fetch('/api/send/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        subject: message,
        name,
      }),
    })

    if (ok) {
      console.log('Email sent successfully')
    } else {
      console.log('error sending email')
    }
  }

  return (
    <section
      id="contact"
      className="container mx-auto flex flex-col justify-center items-center mt-20"
    >
      <div className="space-y-4 mb-12">
        <h6 className="text-primary font-semibold font-bricolage text-md text-center flex items-center justify-center gap-3">
          <Image
            src="/logo.png"
            width={16}
            height={16}
            alt="Website logo"
            className="w-4 h-4"
          />
          {t('subtitle')}
        </h6>

        <h3 className="text-center font-bricolage font-bold text-3xl sm:text-4xl lg:text-5xl">
          {t('title')}
        </h3>

        <p className="text-center font-manrope font-normal text-lg">
          {t('description')}
        </p>
      </div>

      <div className="w-full max-w-4xl">
        <Card className="max-w-5xl font-bricolage px-8 pt-6 bg-background border-input">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.name.label')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('form.name.placeholder')}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.email.label')}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t('form.email.placeholder')}
                          type={'email'}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.message.label')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('form.message.placeholder')}
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-center">
                  <Button type="submit" size={'lg'}>
                    {t('form.submit')}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
