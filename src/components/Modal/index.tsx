import classNames from 'classnames';
import React from 'react';

export interface ModalProps {
  children: any;
  className?: string;
  isOpen: boolean;
}

export function Modal({
  children,
  className,
  isOpen = true,
}: ModalProps): JSX.Element | null {
  const classes = classNames('modal', className);

  return isOpen ? (
    <div className="contant-modal">
      <div className={classes}>{children}</div>
    </div>
  ) : null;
}
