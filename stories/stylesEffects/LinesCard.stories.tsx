import React from 'react';
import { Card, Text } from '../../src';
import { LinesCard } from '../../src';
import { Title } from '../../src';

import { RiMedalLine } from 'react-icons/ri';

export default { title: 'stylesEffect/LinesCard' };

export function Default() {
  return (
    <Card className="h-72	text-center w-56 py-8 md:mr-4 lg:mr-0 md:mb-0 mb-14 lg:mb-0">
      <div className="flex justify-center mb-2.5">
        <RiMedalLine size={40} className="text-green-100" />
      </div>

      <LinesCard className="mb-4" />

      <Title className="mb-4 px-4" tag="h3" size="small">
        Recompensas
      </Title>

      <Text className="text-center px-4" size="small">
        Ao terminar as lições você receberá medalhas como prémio
      </Text>
    </Card>
  );
}

export function OtherColor() {
  return (
    <Card className="h-72	text-center w-56 py-8 md:mr-4 lg:mr-0 md:mb-0 mb-14 lg:mb-0">
      <div className="flex justify-center mb-2.5">
        <RiMedalLine size={40} className="text-blue-100" />
      </div>

      <LinesCard variant="blue" className="mb-4" />

      <Title className="mb-4 px-4" tag="h3" size="small">
        Recompensas
      </Title>

      <Text className="text-center px-4" size="small">
        Ao terminar as lições você receberá medalhas como prémio
      </Text>
    </Card>
  );
}
