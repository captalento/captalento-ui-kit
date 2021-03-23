import React from 'react';

import { Title } from '../../src';

export default { title: 'Elements/Title' };

export function Default() {
  return (
    <Title>
      captalento
    </Title>
  )
}

export function DefaultH2() {
  return (
    <Title tag="h2" variant="blue">
      captalento
    </Title>
  )
}
  
