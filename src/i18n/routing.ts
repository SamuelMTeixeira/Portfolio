import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { defaultLocale, locales } from '@/lib/next-intl'

export const routing = defineRouting({
    locales,
    defaultLocale,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);