"use client"

import { Icon } from '@/components/ui/icon'
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/isMobile"
import { cn } from "@/lib/utils"

export function ThemeToggle() {

    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
    }
    const isMobile = useIsMobile()

    return (
        <Button
            onClick={toggleTheme}
            variant={"outline"}
            size={isMobile ? "lg" : "icon"}
            className={cn('text-primary group', isMobile ? "size-12" : "")}
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
        >
            {theme === "light" ? <Icon icon={Moon02Icon} className="size-6 md:size-4 group-hover:fill-primary group-hover:text-primary" /> : <Icon icon={Sun03Icon} className="w-10 md:w-5 group-hover:fill-primary group-hover:text-primary" />}
        </Button>
    )
}