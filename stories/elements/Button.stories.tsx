import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../../src';

export default { title: 'Elements/Button' };

export function Default() {
  return (
    <div className="grid gap-y-4">
      <Button variant="white">Entrar</Button>
      <Button>Entrar</Button>
      <Button variant="green">Entrar</Button>
      <Button variant="purple">Entrar</Button>
      <Button variant="red">Entrar</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div>
      <Button disabled>Aguarde...</Button>
      <Button disabled variant="green">
        Aguarde...
      </Button>
    </div>
  );
}

export function Outlineds() {
  return (
    <div className="grid gap-y-4">
      <Button outlined variant="white">
        Outlined
      </Button>
      <Button outlined>Outlined</Button>
      <Button outlined variant="green">
        Outlined
      </Button>
      <Button outlined variant="purple">
        Outlined
      </Button>
      <Button outlined variant="red">
        Outlined
      </Button>
    </div>
  );
}

export function WithIcon() {
  return <Button icon={RiArrowRightLine}>Logar</Button>;
}

export function OtherSize() {
  return <Button size="small">Logar</Button>;
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
