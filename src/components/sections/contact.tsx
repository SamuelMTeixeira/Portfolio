'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { z } from 'zod'

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
import useEmail from '@/hooks/useEmail'
import { LoaderCircle } from 'lucide-react'

export default function Projects() {
  const t = useTranslations('Getintouch')
  const { sendRequest, isPending, emailSchema, form } = useEmail()

  async function onSubmit({
    email,
    message,
    name,
  }: z.infer<typeof emailSchema>) {
    sendRequest({ email, message, name })
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
                  <Button type="submit" size={'lg'} disabled={isPending}>
                    {isPending && (
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                    )}
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
