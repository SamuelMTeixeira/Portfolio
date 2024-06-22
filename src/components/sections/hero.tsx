import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <section
      id="hero"
      className="min-h-[93vh] md:min-h-[90vh] flex flex-col justify-center items-center gap-4"
    >
      <h1 className="text-center font-extrabold font-bricolage text-5xl max-w-5xl md:text-6xl md:max-w-6xl">
        {t('title')}
      </h1>
      <p className="text-center font-normal text-lg max-w-md md:text-xl md:max-w-xl lg:text-xl lg:max-w-6xl">
        {t('description')}
      </p>

      <div className="flex gap-4 flex-col md:flex-row mt-4">
        <a href="#contact">
          <Button size={'xl'}>{t('primaryButton')}</Button>
        </a>

        <a href="#projects">
          <Button size={'xl'} variant={'outline'}>
            {t('secondaryButton')}
          </Button>
        </a>
      </div>
    </section>
  )
}
