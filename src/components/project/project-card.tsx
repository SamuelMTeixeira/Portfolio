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
import { Icon } from '@/components/ui/icon'
import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/lib/utils'

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
        'w-full flex flex-col max-w-md overflow-hidden bg-card border pt-0 ' +
        className
      }
      {...props}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`Representative image of the project ${title}`}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        <span className="absolute inset-0 bg-linear-to-t from-background/[.5] to-transparent" />
      </div>

      <CardHeader className="relative z-10 -mt-16 bg-background mx-4 rounded-t-lg p-6">
        <div className="space-x-2">
          <Badge variant={'secondary'} >{category}</Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground/[.9]">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-6 pt-0 flex-1">
        <p className="text-sm text-foreground/[.8] mb-4"> {description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center gap-2 flex-col md:flex-row">

        <Button
          aria-label="View source code"
          variant="outline"
          disabled={!sourceUrl}
          asChild
        >
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('w-full lg:w-auto', sourceUrl ? '' : 'opacity-50 pointer-events-none')}>
            {t('source')}
          </a>
        </Button>


        <Button
          aria-label="View project"
          disabled={!previewUrl}
          asChild
        >
          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('w-full lg:w-auto', previewUrl ? '' : 'opacity-50 pointer-events-none')}>
            {t('view')}

            <Icon icon={LinkSquare02Icon} className="size-4 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
