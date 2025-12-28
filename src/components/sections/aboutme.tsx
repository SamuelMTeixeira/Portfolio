import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useTranslations } from 'next-intl'
import { Icon } from '@/components/ui/icon'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Button } from '@/components/ui/button'

export default function AboutMe() {
  const t = useTranslations('Aboutme')

  return (
    <section
      id="about-me"
      className="container mx-auto flex flex-col justify-center items-center pt-20"
    >
      <div className="w-full max-w-4xl">
        <Card className="max-w-5xl font-bricolage p-8 bg-card">
          <CardContent className="p-0 md:px-6 md:pt-0">
            <p className="font-bricolage text-xl md:text-2xl lg:text-3xl leading-normal tracking-tigh text-center font-normal">
              <span>&quot;</span>
              {t('content')}
              <span>&quot;</span>
            </p>
          </CardContent>

          <CardFooter className="flex justify-center p-0 mt-8">
            <div className="flex flex-row items-center gap-4 lg:gap-8">
              <Avatar className="size-14 lg:size-16">
                <AvatarImage
                  src="/profile.webp"
                  alt="Photo of Samuel Molendolff Teixeira"
                />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 lg:gap-2">
                <h4 className="font-bricolage text-md md:text-xl leading-none font-semibold">
                  Samuel Molendolff Teixeira
                </h4>
                <span>

                  <Button
                    variant={'link'}
                    className="font-manrope text-sm md:text-md font-medium text-primary !px-0"
                    asChild>
                    <a
                      href="https://linkedin.com/in/samuelmteixeira"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('linkedinProfile')}

                      <Icon icon={ArrowRight02Icon} size={14} />
                    </a>
                  </Button>

                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
