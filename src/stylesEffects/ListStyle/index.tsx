import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Variant } from '../../common';

export interface ListStyleProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  shape?: 'circle' | 'square' | 'none';
}

function ListStyle({
  variant = 'green',
  shape = 'square',
  className,
  ...props
}: ListStyleProps) {
  const ListStyleClasses = classNames('listStyle', className);

  return (
    <div
      {...props}
      className={`${ListStyleClasses} is-${shape} is-${variant}`}
    />
  );
}

export { ListStyle };
