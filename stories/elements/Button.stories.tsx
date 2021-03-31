import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../../src';

export default { title: 'Elements/Button' };

export function Default() {
  return (
    <div style={{ width: '300px' }}>
      <Button>Entrar</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ width: '300px' }}>
      <Button disabled={true}>Disabled</Button>
    </div>
  );
}

export function Outlined() {
  return (
    <div style={{ width: '300px' }}>
      <Button outlined>Outlined</Button>
    </div>
  );
}
export function WithIcon() {
  return (
    <Button className="w-72" icon={RiArrowRightLine}>
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

  return (
    <div style={{ width: '300px' }}>
      <Button disabled={actived}>{!actived ? 'logar' : 'Disabled'}</Button>
    </div>
  );
};

EffectDisabled.storyName = 'Effect disabled';
