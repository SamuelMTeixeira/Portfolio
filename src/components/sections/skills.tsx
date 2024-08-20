'use client'

import { useTranslations } from 'next-intl'
import Marquee from '../ui/marquee'

import {
  JavascriptOriginal,
  TypescriptOriginal,
  Html5Plain,
  Css3Plain,
  ReactOriginal,
  PhpPlain,
  LaravelOriginal,
  MysqlOriginal,
  PostgresqlPlain,
  MariadbOriginalWordmark,
  JavaOriginal,
  AndroidOriginal,
  LinuxOriginal,
  KubernetesOriginal,
  TerraformOriginal,
  SpringOriginal,
  AmazonwebservicesOriginalWordmark,
  TailwindcssOriginal,
  GithubactionsPlain,
  DockerPlain,
  NextjsOriginal,
  ExpressOriginalWordmark,
} from 'devicons-react'

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
