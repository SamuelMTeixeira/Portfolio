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
              <CardDescription>
                <a
                  href="https://linkedin.com/in/samuelmteixeira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-manrope text-md font-medium text-primary flex items-center gap-1 hover:underline"
                >
                  {t('linkedinProfile')}

                  <ArrowRight size={14} />
                </a>
              </CardDescription>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
