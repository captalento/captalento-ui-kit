import React from 'react';
import { Card } from '../../src';
import { Title } from '../../src';

import { RiMedalLine } from 'react-icons/ri';

export default { title: 'Components/Card' };

export function Default() {
  return (
    <Card className="px-5 py-8 w-64	text-center">
      <p>Ao terminar as lições você receberá medalhas como prémio</p>
    </Card>
  );
}

export function withColorEffect() {
  return (
    <Card className="px-5 py-8 w-64	text-center" color="blue">
      <p>Ao terminar as lições você receberá medalhas como prémio</p>
    </Card>
  );
}

export function withTitle() {
  return (
    <Card className="px-5 py-8 w-64	text-center flex flex-col items-center">
      <Title size="small" className="mb-4" tag="h3">
        Recompensas
      </Title>
      <p className="text-xs">
        Ao terminar as lições você receberá medalhas como prémio
      </p>
    </Card>
  );
}

export function Icon() {
  return (
    <Card className="px-5 py-8 w-64	text-center flex flex-col items-center">
      <RiMedalLine size={40} className="mb-4" />
      <Title size="small" className="mb-4" tag="h3">
        Recompensas
      </Title>
      <p className="text-xs">
        Ao terminar as lições você receberá medalhas como prémio
      </p>
    </Card>
  );
}
