import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { locales } from '@/lib/next-intl'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: (await import(`@/locales/${locale}.json`)).default,
  }
})
