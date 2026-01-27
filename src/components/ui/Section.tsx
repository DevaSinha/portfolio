import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className, ...props }) => {
    return (
        <section
            id={id}
            className={cn("py-12 md:py-16", className)}
            {...props}
        >
            <Container>
                {children}
            </Container>
        </section>
    );
};
