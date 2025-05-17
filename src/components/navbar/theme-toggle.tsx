"use client"

import { Moon02Icon, Sun03Icon } from "hugeicons-react"
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
            variant={"outline-solid"}
            size={isMobile ? "lg" : "icon"}
            className={cn('text-primary group', isMobile ? "h-12" : "")}
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
        >
            {theme === "light" ? <Moon02Icon className="w-10 md:w-5 group-hover:fill-primary group-hover:text-primary" /> : <Sun03Icon className="w-10 md:w-5 group-hover:fill-primary group-hover:text-primary" />}
        </Button>
    )
}