import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../../src';

export default { title: 'Elements/Button' };

export function Default() {
  return <Button>Entrar</Button>;
}

export function Disabled() {
  return <Button disabled={true}>Disabled</Button>;
}

export function Outlined() {
  return <Button outlined>Outlined</Button>;
}

export function WithIcon() {
  return (
    <Button className="" icon={RiArrowRightLine}>
      Logar
    </Button>
  );
}

// WithIcon.storyName = 'with icon';

export const EffectDisabled = () => {
  const [actived, setActived] = React.useState<boolean>(true);
  setTimeout(() => {
    setActived(!actived);
  }, 2000);

  return <Button disabled={actived}>{!actived ? 'logar' : 'Disabled'}</Button>;
};

EffectDisabled.storyName = 'Effect disabled';
