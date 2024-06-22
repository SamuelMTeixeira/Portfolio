'use client'

import Image from 'next/image'
import { Settings } from 'lucide-react'

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

export default function Header() {
  const t = useTranslations('Header')
  const router = useRouter()
  const pathname = usePathname()?.split('/')[1]

  return (
    <header className="container mx-auto flex items-center justify-between h-[7vh] md:h-[10vh]">
      <span className="w-5" />

      <div className="flex gap-4 items-center">
        <Image
          src="/logo.png"
          width={23}
          height={23}
          alt="Website logo"
          className="w-4 h-4 md:w-5 md:h-5"
        />

        <h1 className="font-bricolage font-bold text-lg sm:text-2xl md:text-3xl text-center">
          Samuel M. Teixeira
        </h1>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Settings />
          </MenubarTrigger>
          <MenubarContent>
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
