import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Variant } from '../../common';

export interface LineTitleProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  shape?: 'circle' | 'square' | 'none';
  outlined?: boolean;
}

function LineTitle({
  variant = 'green',
  shape = 'square',
  outlined,
  className,
  ...props
}: LineTitleProps) {
  const lineTitleClasses = classNames('lineTitle', className);

  return (
    <div {...props} className={lineTitleClasses}>
      <div
        className={`shape ${
          outlined ? 'outlined' : null
        } is-${shape} is-${variant}`}
      />
      <div className={`line is-${variant}`} />
    </div>
  );
}

export { LineTitle };
