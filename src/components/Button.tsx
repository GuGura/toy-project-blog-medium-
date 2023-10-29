import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/lib/util';

interface ButtonProps<T extends React.ElementType> {
  as?: T;
  children: React.ReactNode;
  buttonType?: string;
}

export default function Button<T extends React.ElementType = 'button'>({
  as,
  buttonType,
  children,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || 'button';

  let base = 'rounded px-3 py-1.5';

  if (buttonType === 'tag') {
    base += ' bg-border';
  }
  return (
    <Component {...props} className={cn(base, props.className)}>
      {children}
    </Component>
  );
}
