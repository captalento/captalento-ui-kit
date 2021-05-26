import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';
import { ButtonCheck } from '../../../../elements';

export interface PropsLesson extends HTMLAttributes<HTMLLIElement> {
  id: string;
  selected: string;
  done: boolean;
  onFinish: (idLesson: string) => void;
  onActive: (id: string, selected: string) => void;
  title: string;
}

function Lesson({
  id,
  selected,
  className,
  children,
  done,
  title,
  onFinish,
  onActive,
  ...rest
}: PropsLesson): JSX.Element | null {
  const classes = classNames('lesson', id === selected ? 'active' : '', className);

  function handleClick() {
    onFinish(id);
  }

  function isActive() {
    onActive(id, selected);
  }

  return (
    <li {...rest} className={classes}>
      <ButtonCheck done={done} onClick={handleClick} />

      <button onClick={isActive} className="fakeRoute">
        {title}
      </button>
      {children}
    </li>
  );
}

export { Lesson };
