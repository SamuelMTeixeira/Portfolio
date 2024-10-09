'use client'

import Image from 'next/image'
import { Menu } from 'lucide-react'

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
import { useRouter } from '@/navigation'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Header() {
  const t = useTranslations('Header')
  const router = useRouter()
  const pathname = usePathname()?.split('/')[1]

  return (
    <header className="container mx-auto flex items-center justify-between h-[10vh]">
      <Image src="/logo.png" width={32} height={32} alt="Website logo" />

      <h1 className="font-bricolage font-bold hidden md:block md:text-3xl text-center">
        Samuel M. Teixeira
      </h1>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Button size={'icon'} variant={'outline'}>
              <Menu size={24} />
            </Button>
          </MenubarTrigger>
          <MenubarContent className="rounded-sm">
            <MenubarSub>
              <MenubarSubTrigger>{t('languages.title')}</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarRadioGroup value={pathname}>
                  {locales.map((locale, index) => (
                    <MenubarRadioItem
                      onSelect={() => router.replace(locale)}
                      key={index}
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
