import { navigate } from '@reach/router';
import React from 'react';
import { BiExit, BiMovie } from 'react-icons/bi';

import { AvatarMenu, Button } from '../../src';

export default { title: 'Elements/AvatarMenu' };

export function Default() {
  const handeleClick = React.useCallback(() => {
    navigate('https://app.captalento.com/my-courses');
  }, []);

  const [active, setActive] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
      >
        Active
      </Button>
      <AvatarMenu isActive={active} />
    </>
  );
}

export function SomeOption() {
  const handeleClick = React.useCallback(() => {
    navigate('https://app.captalento.com/my-courses');
  }, []);

  const [active, setActive] = React.useState(false);

  const options = [
    {
      icon: BiMovie,
      message: 'Meu cursos',
      funcEvent: handeleClick,
    },
    {
      icon: BiExit,
      message: 'Sair',
      route: '/login',
    },
  ];

  return (
    <>
      <button
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
      >
        Active
      </button>
      <AvatarMenu isActive={active} newOptions={options} />
    </>
  );
}
