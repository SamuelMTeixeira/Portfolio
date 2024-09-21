'use client'

import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, CodeXml } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslations } from 'next-intl'

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  imageUrl: StaticImageData
  sourceUrl?: string
  previewUrl?: string
  type: string
  tags: string[]
}

export default function ProjectCard({
  imageUrl,
  sourceUrl = '',
  previewUrl = '',
  title,
  type,
  tags,
  description,
  className,
  ...props
}: ProjectCardProps) {
  const t = useTranslations('Projects.card')

  return (
    <Card
      className={
        'w-full max-w-md overflow-hidden bg-white border-input ' + className
      }
      {...props}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Representative image of the project ${title}`}
          className="w-full h-auto object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-white/[.5] to-transparent"></span>
      </div>

      <CardHeader className="relative z-10 -mt-16 bg-white mx-4 rounded-t-lg p-6">
        <div className="space-x-2">
          <Badge className="bg-primary/[.8]">{type}</Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground/[.9]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0">
        <p className="text-sm text-foreground/[.8] mb-4"> {description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/[0.05] hover:bg-primary/[0.1] text-primary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <Button variant="outline" className="text-sm" disabled={!sourceUrl}>
          <a
            href={sourceUrl}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeXml className="w-4 h-4 mr-2" />
            {t('source')}
          </a>
        </Button>

        <Button className="text-sm" disabled={!previewUrl}>
          <a
            href={previewUrl}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('view')}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
