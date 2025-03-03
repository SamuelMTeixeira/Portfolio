"use client"

import { Moon02Icon, Sun03Icon } from "hugeicons-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/isMobile"

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
            className={isMobile ? "h-12 text-foreground/70" : "text-foreground/70"}
            aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
        >
            {theme === "light" ? <Moon02Icon className="w-10 md:w-5" /> : <Sun03Icon className="w-10 md:w-5" />}
        </Button>
    )
}