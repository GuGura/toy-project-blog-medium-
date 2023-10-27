import React, { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps<T extends React.ElementType> {
  as?: T;
  children: React.ReactNode;
}

export default function Button<T extends React.ElementType = 'button'>({
  as,
  children,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || 'button';

  return (
    <Component
      {...props}
      className={twMerge(
        'rounded bg-[#D9D1F2] px-3 py-1.5  hover:bg-[#C4BCE6]',
        props.className,
      )}
    >
      {children}
    </Component>
  );
}
