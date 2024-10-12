import Image from 'next/image'
import console from '@/assets/img/console.png'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  subtitle: string
  description: string
}

export default function Section({
  children,
  id,
  className,
  title,
  subtitle,
  description,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        'container mx-auto flex flex-col justify-center items-center  ' +
        className
      }
      {...props}
    >
      <div className="space-y-4 mb-12">
        <h4 className="text-primary font-semibold font-bricolage text-md text-center flex items-center justify-center gap-3">
          <Image
            src={console}
            width={16}
            height={16}
            alt="Console icon"
            className="w-4 h-4"
          />
          {subtitle}
        </h4>

        <h3 className="text-center font-bricolage font-bold text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h3>

        <p className="text-center font-manrope font-normal text-lg">
          {description}
        </p>
      </div>

      {children}
    </section>
  )
}
