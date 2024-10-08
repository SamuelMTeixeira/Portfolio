import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from '@/lib/next-intl'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales })
