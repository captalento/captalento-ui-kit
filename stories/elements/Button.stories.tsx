import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../../src';

export default { title: 'Elements/Button' };

export function Default() {
  return (
    <div>
      <Button className="mb-4">Entrar</Button>
      <Button variant="green">Entrar</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div>
      <Button disabled className="mb-4">
        Aguarde...
      </Button>
      <Button disabled variant="green">
        Aguarde...
      </Button>
    </div>
  );
}

export function Outlineds() {
  return (
    <div>
      <Button outlined className="mb-4">
        Outlined
      </Button>
      <Button outlined variant="green">
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
