'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
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
import Section from '@/components/ui/section'

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
    <Section
      id="contact"
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      className="mt-20"
    >
      <div className="w-full max-w-4xl">
        <Card className="max-w-5xl font-bricolage p-8 bg-background border-input">
          <CardContent className="p-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
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

                <CardFooter className="flex justify-center p-0">
                  <Button
                    type="submit"
                    size={'default'}
                    disabled={isPending}
                    className="md:h-11 md:px-8"
                  >
                    {isPending && (
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                    )}
                    {t('form.submit')}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
