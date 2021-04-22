import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Variant } from '../../common';

export interface colorProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

function LinesCard({ variant = 'green', className, ...props }: colorProps) {
  const linesCardClasses = classNames('linesCard', className);

  return (
    <div {...props} className={linesCardClasses}>
      <div className={`primaryLine is-${variant}`} />
      <div className={`secondaryLine is-${variant}`} />
    </div>
  );
}

export { LinesCard };
