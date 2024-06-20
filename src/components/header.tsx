'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

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

        <h1 className="font-bricolage font-bold text-2xl md:text-3xl text-center">
          Samuel M. Teixeira
        </h1>
      </div>

      <Button
        size={'icon'}
        variant={'ghost'}
        className="text-foreground"
        onClick={() => setOpen(true)}
      >
        <Settings className="w-6 h-6" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou pesquise..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
          <CommandGroup heading="Configurações">
            <CommandItem>Tema</CommandItem>
            <CommandItem>Idioma</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  )
}
