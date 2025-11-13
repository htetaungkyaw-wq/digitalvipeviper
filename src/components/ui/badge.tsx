import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'glow' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants: Record<Required<BadgeProps>['variant'], string> = {
    default: 'bg-white/10 text-white/80',
    glow: 'bg-gradient-to-r from-indigo-400/80 to-fuchsia-500/80 text-white shadow-glow',
    outline: 'border border-white/10 text-white/70'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
