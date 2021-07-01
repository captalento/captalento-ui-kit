import classNames from 'classnames';
import React from 'react';
import { Item } from './Item';

export interface ListProps extends React.LiHTMLAttributes<HTMLLIElement> {}

function List({ className, children }: ListProps): JSX.Element {
  const listClasses = classNames('list', className);

  return <ul className={listClasses}>{children}</ul>;
}

List.Item = Item;
export { List, Item };
