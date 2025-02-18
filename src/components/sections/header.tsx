'use client'

import Image from 'next/image'
import { TranslateIcon } from 'hugeicons-react'
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { useTranslations } from 'next-intl'
import { locales } from '@/lib/next-intl'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useRouter } from '@/i18n/routing'

export default function Header() {
  const t = useTranslations('Header')
  const router = useRouter()
  const pathname = usePathname()?.split('/')[1]

  return (
    <header className="container mx-auto flex items-center justify-between h-[10vh]">
      <Image src="/logo.webp" width={32} height={32} alt="Website logo" />

      <h1 className="hidden md:block font-bricolage font-bold text-center md:text-3xl">
        Samuel M. Teixeira
      </h1>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button aria-label="open menu" size="lg" variant="outline">
              <TranslateIcon size={22} />
            </Button>
          </MenubarTrigger>
          <MenubarContent className="rounded-sm">
            <MenubarSub>
              <MenubarSubTrigger>{t('languages.title')}</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value={pathname}>
                  {locales.map((locale) => (
                    <MenubarRadioItem
                      onSelect={() => router.replace(locale)}
                      key={locale}
                      value={locale}
                    >
                      {t(`languages.${locale}`)}
                    </MenubarRadioItem>
                  ))}
                </MenubarRadioGroup>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}
