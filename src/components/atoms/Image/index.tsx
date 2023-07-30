import Img, { ImageProps } from 'next/image'

interface Image extends ImageProps {
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
}

export default function Image({
  alt,
  src,
  width,
  height,
  style,
  priority,
  ...props
}: Image) {
  return (
    <Img
      style={style}
      height={height}
      width={width}
      src={src}
      priority={priority}
      alt={alt}
      {...props}
    />
  )
}
