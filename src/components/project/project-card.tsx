'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useTranslations } from 'next-intl'
import { ProjectProps } from '@/services/projects'
import { LinkSquare02Icon, SourceCodeIcon } from 'hugeicons-react'

export default function ProjectCard({
  imageUrl,
  sourceUrl,
  previewUrl,
  title,
  category,
  tags,
  description,
  className,
  ...props
}: ProjectProps & React.HTMLAttributes<HTMLDivElement>) {
  const t = useTranslations('Projects.card')

  return (
    <Card
      className={
        'w-full flex flex-col max-w-md overflow-hidden bg-white border-input ' +
        className
      }
      {...props}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          fill
          alt={`Representative image of the project ${title}`}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-white/[.5] to-transparent"></span>
      </div>

      <CardHeader className="relative z-10 -mt-16 bg-white mx-4 rounded-t-lg p-6">
        <div className="space-x-2">
          <Badge className="bg-primary/[.8]">{category}</Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground/[.9]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0 flex-1">
        <p className="text-sm text-foreground/[.8] mb-4"> {description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center gap-2 flex-col md:flex-row">
        <a
          href={sourceUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto"
        >
          <Button
            aria-label="View source code"
            variant="outline"
            className="text-sm flex items-center w-full"
            disabled={!sourceUrl}
          >
            <SourceCodeIcon className="w-4 h-4 mr-2" />
            {t('source')}
          </Button>
        </a>

        <a
          href={previewUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-auto"
        >
          <Button
            aria-label="View project"
            className="text-sm flex items-center w-full"
            disabled={!previewUrl}
          >
            {t('view')}

            <LinkSquare02Icon className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
