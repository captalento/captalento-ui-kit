import React from 'react';
import classNames from 'classnames';
import { Size, Variant } from '../../common';

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  variant?: Variant;
  size?: Exclude<Size, 'xl'>;
}

function Text({
  size = 'md',
  variant = 'white',
  className,
  children,
  ...props
}: TextProps): JSX.Element {
  const textClasses = classNames(
    'text',
    {
      [`is-${size}`]: true,
      [`is-${variant}`]: true,
    },
    className
  );

  return (
    <p className={textClasses} {...props}>
      {children}
    </p>
  );
}

export { Text };
