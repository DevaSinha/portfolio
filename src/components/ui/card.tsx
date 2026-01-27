import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'rounded-xl border border-white/5 bg-card/40 text-card-foreground shadow-sm backdrop-blur-sm',
            className
        )}
        {...props}
    />
));
Card.displayName = 'Card';
