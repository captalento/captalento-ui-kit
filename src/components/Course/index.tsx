import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { LineProgress, Text, Title } from '../../elements';
import { Module } from './Module/Module';

export interface PropsCourse extends HTMLAttributes<HTMLDivElement> {
  name: string;
  place: string;
  percentageCourse: number;
}

function Course({
  name,
  place,
  className,
  children,
  percentageCourse,
  ...rest
}: PropsCourse): JSX.Element | null {
  const classes = classNames('course', className);

  return (
    <div {...rest} className={classes}>
      <div className="name">
        <Text size="3xs" variant="gray">
          {place}
        </Text>

        <Title size="small" tag="h3">
          {name}
        </Title>

        <LineProgress completionPercentage={percentageCourse} />
      </div>

      {children}
    </div>
  );
}

Course.Module = Module;

export { Course, Module };
