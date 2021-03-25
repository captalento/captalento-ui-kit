import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Contant, Card, Effect } from './styles';

export interface CardInfoProps {
  icon?: React.ComponentType<IconBaseProps> | null;
  colorEffect?: boolean;
  children: any;
  color?: 'blue' | 'green';
  className?: string;
}

export function CardInfo({
  icon: Icon,
  color,
  children,
  className,
}: CardInfoProps): JSX.Element {
  return (
    <Contant className={className}>
      {color ? <Effect color={color} /> : null}
      <Card className="shadow">
        {Icon ? <Icon size={40} /> : null}
        {children}
      </Card>
    </Contant>
  );
}
