import Img, { StaticImageData } from 'next/image'
import { CSSProperties } from 'react';

interface ImageProps {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    style?: CSSProperties;
    priority?: boolean;
}

export default function Image({ alt, src, width, height, style, priority, ...props }: ImageProps) {
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