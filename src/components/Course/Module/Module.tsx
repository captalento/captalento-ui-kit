import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { Title, CircleProgress } from '../../../elements';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Lesson } from './Lesson/Lesson';

export interface PropsModule extends HTMLAttributes<HTMLDivElement> {
  totalLessons?: number;
  name: string;
  moduleNumber: string;
  id: string;
  actived: string;
  onActive: (actived: string) => void;
  children: any;
}

function Module({
  name,
  moduleNumber,
  className,
  children,
  id,
  actived,
  onActive,

  ...rest
}: PropsModule): JSX.Element | null {
  const classes = classNames(
    'module',
    id === actived ? 'isShow' : '',
    className
  );
  const percentage: any = [];

  function handleActive() {
    onActive(id);
  }

  React.Children.map(children, (child) => {
    if (child.props.done) {
      percentage.push(child.props.done);
      return;
    }
  });

  return (
    <>
      <div {...rest} className={classes} onClick={handleActive}>
        <div className="containerInfo">
          <CircleProgress
            number={moduleNumber}
            completionPercentage={
              (100 / React.Children.count(children)) * percentage.length
            }
          />

          <div className="information">
            <Title size="x-small" tag="h3">
              {name}
            </Title>
            <span>{React.Children.count(children)} - Aulas</span>
          </div>
        </div>

        <TiArrowSortedDown size={28} className="arrow" />
      </div>
      <ul className={id === actived ? 'isShow' : ''}>{children}</ul>
    </>
  );
}

Module.Lesson = Lesson;

export { Module };
