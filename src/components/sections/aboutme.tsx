'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'

export default function AboutMe() {
  const t = useTranslations('Aboutme')

  return (
    <section id="about-me" className="my-20 flex justify-center">
      <Card className="max-w-5xl font-bricolage px-16 py-8">
        <CardContent className="p-6">
          <p className="font-bricolage text-3xl leading-normal tracking-tight text-center font-normal">
            <span>&quot;</span>
            {t('content')}
            <span>&quot;</span>
          </p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <div className="flex flex-row items-center gap-8">
            <Avatar className="w-20 h-auto">
              <AvatarImage
                src="https://github.com/samuelmteixeira.png"
                alt="@samuelmteixeira"
              />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
              <CardTitle className="font-bricolage">
                Samuel Molendolff Teixeira
              </CardTitle>
              <CardDescription className="font-manrope text-md font-medium">
                {t('position')}
              </CardDescription>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
