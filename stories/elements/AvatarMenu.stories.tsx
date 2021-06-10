import { navigate } from '@reach/router';
import React from 'react';
import { BiMovie } from 'react-icons/bi';

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

  const option = {
    icon: BiMovie,
    message: 'Meu cursos',
    funcEvent: handeleClick,
  };

  return (
    <>
      <button
        onClick={() => setActive(!active)}
        onBlur={() => setActive(false)}
      >
        Active
      </button>
      <AvatarMenu isActive={active} newOption={option} />
    </>
  );
}
