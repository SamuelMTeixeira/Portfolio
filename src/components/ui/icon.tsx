import { cn } from '@/lib/utils';
import { HugeiconsIcon, type HugeiconsIconProps } from '@hugeicons/react';

export type HugeIcon =
    | [
        string,
        {
            [key: string]: string | number;
        },
    ][]
    | readonly (readonly [
        string,
        {
            readonly [key: string]: string | number;
        },
    ])[];



interface IconProps extends Omit<HugeiconsIconProps, 'ref'> {
    icon: HugeIcon;
}

export function Icon({ icon, className, ...props }: IconProps) {
    return <HugeiconsIcon icon={icon} className={cn('size-5', className)} {...props} />;
}
