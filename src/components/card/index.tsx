import classNames from 'classnames';
import React from 'react';

export interface cardProps {
  children: any;
  color?: 'blue' | 'green';
  className?: string;
}

export function Card({ color, children, className }: cardProps): JSX.Element {
  const classes = classNames(
    'card',
    {
      [`is-${color}`]: color,
    },
    className
  );

  return <div className={classes}>{children}</div>;
}
