'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const Marquee = dynamic(() => import('../ui/marquee'), {
  suspense: true,
  ssr: false,
})

const JavascriptOriginal = dynamic(
  () => import('devicons-react/lib/icons/JavascriptOriginal'),
)
const TypescriptOriginal = dynamic(
  () => import('devicons-react/lib/icons/TypescriptOriginal'),
)
const Html5Plain = dynamic(() => import('devicons-react/lib/icons/Html5Plain'))
const Css3Plain = dynamic(() => import('devicons-react/lib/icons/Css3Plain'))
const ReactOriginal = dynamic(
  () => import('devicons-react/lib/icons/ReactOriginal'),
)
const PhpPlain = dynamic(() => import('devicons-react/lib/icons/PhpPlain'))
const LaravelOriginal = dynamic(
  () => import('devicons-react/lib/icons/LaravelOriginal'),
)
const MysqlOriginal = dynamic(
  () => import('devicons-react/lib/icons/MysqlOriginal'),
)
const PostgresqlPlain = dynamic(
  () => import('devicons-react/lib/icons/PostgresqlPlain'),
)
const MariadbOriginalWordmark = dynamic(
  () => import('devicons-react/lib/icons/MariadbOriginalWordmark'),
)
const JavaOriginal = dynamic(
  () => import('devicons-react/lib/icons/JavaOriginal'),
)
const AndroidOriginal = dynamic(
  () => import('devicons-react/lib/icons/AndroidOriginal'),
)
const LinuxOriginal = dynamic(
  () => import('devicons-react/lib/icons/LinuxOriginal'),
)
const KubernetesOriginal = dynamic(
  () => import('devicons-react/lib/icons/KubernetesOriginal'),
)
const TerraformOriginal = dynamic(
  () => import('devicons-react/lib/icons/TerraformOriginal'),
)
const SpringOriginal = dynamic(
  () => import('devicons-react/lib/icons/SpringOriginal'),
)
const AmazonwebservicesOriginalWordmark = dynamic(
  () => import('devicons-react/lib/icons/AmazonwebservicesOriginalWordmark'),
)
const TailwindcssOriginal = dynamic(
  () => import('devicons-react/lib/icons/TailwindcssOriginal'),
)
const GithubactionsPlain = dynamic(
  () => import('devicons-react/lib/icons/GithubactionsPlain'),
)
const DockerPlain = dynamic(
  () => import('devicons-react/lib/icons/DockerPlain'),
)
const NextjsOriginal = dynamic(
  () => import('devicons-react/lib/icons/NextjsOriginal'),
)
const ExpressOriginalWordmark = dynamic(
  () => import('devicons-react/lib/icons/ExpressOriginalWordmark'),
)

export default function Skills() {
  const t = useTranslations('Skills')

  return (
    <section id="skills">
      <h2 className="text-center font-semibold font-bricolage text-3xl mt-14 mb-10">
        {t('title')}
      </h2>

      <Marquee speed={60} direction="left" className="max-w-5xl">
        <JavascriptOriginal size="50" />
        <TypescriptOriginal size="50" />
        <Html5Plain size="50" />
        <Css3Plain size="50" />
        <ReactOriginal size="50" />
        <PhpPlain size="50" />
        <LaravelOriginal size="50" />
        <JavaOriginal size="50" />
        <SpringOriginal size="50" />
        <AndroidOriginal size="50" />
        <TailwindcssOriginal size="50" />
        <NextjsOriginal size="50" />
        <ExpressOriginalWordmark size="50" />

        <LinuxOriginal size="50" />
        <DockerPlain size="50" />
        <KubernetesOriginal size="50" />
        <TerraformOriginal size="50" />
        <AmazonwebservicesOriginalWordmark size="50" />
        <GithubactionsPlain size="50" />

        <MysqlOriginal size="50" />
        <PostgresqlPlain size="50" />
        <MariadbOriginalWordmark size="50" />
      </Marquee>
    </section>
  )
}
