import classNames from 'classnames';
import React, { HtmlHTMLAttributes } from 'react';
import { Variant } from '../../../common';
import { ListStyle } from '../../../stylesEffects/ListStyle';

export interface ItemProps extends HtmlHTMLAttributes<HTMLLIElement> {
  shape?: 'square' | 'circle' | 'none';
  variant?: Variant;
}

function Item({
  children,
  variant,
  className,
  shape,
  ...props
}: ItemProps): JSX.Element {
  const itemClasses = classNames(className);

  return (
    <li {...props} className={itemClasses}>
      <ListStyle variant={variant} shape={shape} className="mr-4" /> {children}
    </li>
  );
}

export { Item };
