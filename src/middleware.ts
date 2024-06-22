import createMiddleware from 'next-intl/middleware'
import { defaultLocale, locales } from '@/lib/next-intl'

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(pt|en)/:path*'],
}
