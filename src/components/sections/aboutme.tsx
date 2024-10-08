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
import { ArrowRight } from 'lucide-react'

export default function AboutMe() {
  const t = useTranslations('Aboutme')

  return (
    <section
      id="about-me"
      className="container mx-auto flex flex-col justify-center items-center my-20"
    >
      <div className="w-full max-w-4xl">
        <Card className="max-w-5xl font-bricolage p-8">
          <CardContent>
            <p className="font-bricolage text-xl md:text-2xl lg:text-3xl leading-normal tracking-tight text-center font-normal">
              <span>&quot;</span>
              {t('content')}
              <span>&quot;</span>
            </p>
          </CardContent>

          <CardFooter className="flex justify-center p-0">
            <div className="flex flex-row items-center gap-4 lg:gap-8">
              <Avatar className="w-14 lg:w-20 h-auto">
                <AvatarImage
                  src="https://github.com/samuelmteixeira.png"
                  alt="@samuelmteixeira"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 lg:gap-2">
                <CardTitle className="font-bricolage text-md md:text-xl leading-none">
                  Samuel Molendolff Teixeira
                </CardTitle>
                <CardDescription>
                  <a
                    href="https://linkedin.com/in/samuelmteixeira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-sm md:text-md font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    {t('linkedinProfile')}

                    <ArrowRight size={14} />
                  </a>
                </CardDescription>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
