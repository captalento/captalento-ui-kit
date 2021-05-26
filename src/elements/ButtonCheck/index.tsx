import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface PropsButtonCheck
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  done: boolean;
}

function ButtonCheck({
  children,
  className,
  done = false,
  ...rest
}: PropsButtonCheck) {
  const classes = classNames('buttonCheck', [done ? 'done' : ''], className);
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export { ButtonCheck };
