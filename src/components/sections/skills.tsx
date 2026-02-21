'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const HorizontalTicker = dynamic(
  () => import('react-infinite-ticker').then(mod => mod.HorizontalTicker),
  { ssr: false }
)

import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal'
import Html5Plain from 'devicons-react/icons/Html5Plain'
import Css3Plain from 'devicons-react/icons/Css3Plain'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import PhpPlain from 'devicons-react/icons/PhpPlain'
import LaravelOriginal from 'devicons-react/icons/LaravelOriginal'
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal'
import PostgresqlPlain from 'devicons-react/icons/PostgresqlPlain'
import MariadbOriginalWordmark from 'devicons-react/icons/MariadbOriginalWordmark'
import JavaOriginal from 'devicons-react/icons/JavaOriginal'
import AndroidOriginal from 'devicons-react/icons/AndroidOriginal'
import LinuxOriginal from 'devicons-react/icons/LinuxOriginal'
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal'
import TerraformOriginal from 'devicons-react/icons/TerraformOriginal'
import SpringOriginal from 'devicons-react/icons/SpringOriginal'
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark'
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal'
import GithubactionsPlain from 'devicons-react/icons/GithubactionsPlain'
import DockerPlain from 'devicons-react/icons/DockerPlain'
import NextjsOriginal from 'devicons-react/icons/NextjsOriginal'
import ExpressOriginalWordmark from 'devicons-react/icons/ExpressOriginalWordmark'

const icons = [
  JavascriptOriginal,
  TypescriptOriginal,
  Html5Plain,
  Css3Plain,
  ReactOriginal,
  PhpPlain,
  LaravelOriginal,
  JavaOriginal,
  SpringOriginal,
  AndroidOriginal,
  TailwindcssOriginal,
  NextjsOriginal,
  ExpressOriginalWordmark,
  LinuxOriginal,
  DockerPlain,
  KubernetesOriginal,
  TerraformOriginal,
  AmazonwebservicesOriginalWordmark,
  GithubactionsPlain,
  MysqlOriginal,
  PostgresqlPlain,
  MariadbOriginalWordmark,
]

export default function Skills() {
  const t = useTranslations('Skills')

  return (
    <section id="skills" className='pt-20'>
      <h2 className="text-center font-semibold font-bricolage text-3xl mb-10">
        {t('title')}
      </h2>

      <div className='mx-auto flex justify-center max-w-5xl'>
        <HorizontalTicker duration={25000}>
          {icons.map((Icon, index) => (
            <TickerIcon key={index}>
              <Icon size="10" className="w-16" />
            </TickerIcon>
          ))}
        </HorizontalTicker>
      </div>
    </section>
  )

  function TickerIcon({ children }: { children: React.ReactNode }) {
    return (
      <div className="mx-6 flex items-center">
        {children}
      </div>
    )
  }
}