import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { BiCheck } from 'react-icons/bi';
import { Text } from '../Text';

export interface PropsCircleprogress extends HTMLAttributes<HTMLDivElement> {
  number: string;
  completionPercentage: number;
}

function CircleProgress({
  number,
  completionPercentage,
  className,
}: PropsCircleprogress) {
  const classes = classNames('circleProgress', className);

  return (
    <div className={classes}>
      <svg>
        <circle cx="18" cy="18" r="18" />
        <circle
          cx="18"
          cy="18"
          r="18"
          style={{
            strokeDashoffset: `calc(113 - (113 * ${completionPercentage}) / 100)`,
          }}
        />
      </svg>

      <Text>{completionPercentage === 100 ? <BiCheck className="checked" /> : number}</Text>
    </div>
  );
}

export { CircleProgress };
