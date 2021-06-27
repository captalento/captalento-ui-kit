import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Variant } from '../../common';

export interface ListStyleProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

function ListStyle({ variant = 'green', className, ...props }: ListStyleProps) {
  const ListStyleClasses = classNames('listStyle', className);

  return <div {...props} className={`${ListStyleClasses} is-${variant}`} />;
}

export { ListStyle };
