import * as React from 'react';
import { cn } from '@/lib/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  imageUrl?: string;
}

export function Avatar({ name, imageUrl, className, ...props }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-base font-semibold uppercase text-white shadow-inner',
        className
      )}
      {...props}
    >
      {imageUrl ? <img src={imageUrl} alt={name} className="h-full w-full rounded-2xl object-cover" /> : initials}
    </div>
  );
}
