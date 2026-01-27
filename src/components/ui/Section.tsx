import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    containerClassName,
    id,
    ...props
}) => {
    return (
        <section
            id={id}
            className={cn('section-padding relative overflow-hidden', className)}
            {...props}
        >
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
};
