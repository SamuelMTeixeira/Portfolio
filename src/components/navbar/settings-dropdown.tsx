"use client"

import { Globe02Icon } from "hugeicons-react"
import { useTranslations } from 'next-intl'
import { locales } from '@/lib/next-intl'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useRouter } from '@/i18n/routing'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/isMobile"

export function SettingsDropdown() {
    const t = useTranslations('Header')
    const router = useRouter()
    const pathname = usePathname()?.split('/')[1]
    const isMobile = useIsMobile()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button aria-label="open menu"
                    size={isMobile ? "lg" : "icon"}
                    variant="outline"
                    className={isMobile ? "h-12 text-foreground/70" : "text-foreground/70"}>
                    <Globe02Icon className="w-10 md:w-5" />
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{t("languages.title")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={pathname}>
                    {locales.map((locale) => (
                        <DropdownMenuRadioItem
                            onSelect={() => router.replace(locale)}
                            key={locale}
                            value={locale}
                        >
                            {t(`languages.${locale}`)}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

