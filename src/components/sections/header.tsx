'use client'

import Image from 'next/image'
import { CodeFolderIcon, CoPresentIcon, LibraryIcon, MailEdit01Icon, Menu02Icon } from 'hugeicons-react'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from "react"
import Link from "next/link"
import { SettingsDropdown } from '@/components/navbar/settings-dropdown'
import { ThemeToggle } from '@/components/navbar/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled
          ? "bg-card border backdrop-blur-md shadow-lg w-[95%] md:w-[90%] lg:w-[80%]"
          : "bg-background/70 backdrop-blur-xs w-[98%] md:w-[95%] lg:w-[90%]"
          } rounded-full py-2 px-4 hidden md:flex items-center justify-between`}
      >
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Image src="/logo.webp" width={24} height={24} alt="Website logo" />

            <span className="font-semibold text-base">Samuel M. Teixeira</span>
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <NavItem icon={<CoPresentIcon size={18} />} label={t("Aboutme.label")} href="#about-me" />
          <NavItem icon={<LibraryIcon size={18} />} label={t("Skills.label")} href="#skills" />
          <NavItem icon={<CodeFolderIcon size={18} />} label={t("Projects.label")} href="#projects" />
          <NavItem icon={<MailEdit01Icon size={18} />} label={t("Getintouch.label")} href="#contact" />
        </div>

        <div className="flex items-center gap-2">
          <SettingsDropdown />

          <ThemeToggle />
        </div>
      </nav>

      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/90 backdrop-blur-md shadow-lg w-[95%] md:w-[90%] lg:w-[80%]"
        : "bg-background/70 backdrop-blur-xs w-[98%] md:w-[95%] lg:w-[90%]"
        } rounded-full py-2 px-4 flex md:hidden items-center justify-between`}>

        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl flex items-center gap-2">
            <Image src="/logo.webp" width={24} height={24} alt="Website logo" />

            <span className="font-semibold text-base">Samuel M. Teixeira</span>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className='flex md:hidden' aria-label='Open menu'>
              <Menu02Icon className='size-4' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-6 px-4">
              <NavItem icon={<CoPresentIcon size={18} />} label={t("Aboutme.label")} href="#about-me" />
              <NavItem icon={<LibraryIcon size={18} />} label={t("Skills.label")} href="#skills" />
              <NavItem icon={<CodeFolderIcon size={18} />} label={t("Projects.label")} href="#projects" />
              <NavItem icon={<MailEdit01Icon size={18} />} label={t("Getintouch.label")} href="#contact" />
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
              <SettingsDropdown />

              <ThemeToggle />
            </div>

          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

function NavItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      aria-label={`Navigate to ${label}`}
      href={href}
      className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition-colors text-lg md:text-sm">
      {icon}
      <span>{label}</span>
    </a>
  )
}