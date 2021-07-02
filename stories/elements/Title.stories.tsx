import React from 'react';

import { Title } from '../../src';

export default { title: 'Elements/Title' };

export function Default() {
  return <Title tag="h1">captalento</Title>;
}

export function DefaultH2() {
  return (
    <Title tag="h2" variant="blue">
      captalento
    </Title>
  );
}

export function OtherSizes() {
  return (
    <div className="grid gap-y-4">
      <Title tag="h2" size="4xl">
        captalento
      </Title>
      <Title tag="h2" size="x-large">
        captalento
      </Title>
      <Title tag="h2" size="large">
        captalento
      </Title>
      <Title tag="h2" size="medium">
        captalento
      </Title>
      <Title tag="h2" size="small">
        captalento
      </Title>
      <Title tag="h2" size="x-small">
        captalento
      </Title>
      <Title tag="h2" size="2xs">
        captalento
      </Title>
      <Title tag="h2" size="3xs">
        captalento
      </Title>
    </div>
  );
}
