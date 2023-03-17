import Img, { StaticImageData } from 'next/image'

interface ImageProps {
    src: string | StaticImageData;
    description: string;
    width: number;
    height: number;
}

export default function Image({ description, src, width, height, ...props }: ImageProps) {
    return (
        <Img
            height={height}
            width={width}
            src={src}
            alt={description}
            {...props}
        />
    )
}