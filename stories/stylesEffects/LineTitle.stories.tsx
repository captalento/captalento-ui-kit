import React from 'react';

import { Title, LineTitle } from '../../src';

export default { title: 'stylesEffect/LineTitle' };

export function Default() {
  return (
    <div>
      <Title tag="h1">captalento</Title>
      <LineTitle />
    </div>
  );
}

export function OtherShape() {
  return (
    <div>
      <Title tag="h1">captalento</Title>
      <LineTitle variant="blue" shape="circle" />
    </div>
  );
}

export function Outlined() {
  return (
    <div>
      <div>
        <Title tag="h1">captalento</Title>
        <LineTitle variant="blue" outlined className="mb-4" />
      </div>

      <div>
        <Title tag="h1">captalento</Title>
        <LineTitle variant="blue" shape="circle" outlined />
      </div>

      <div>
        <Title tag="h1">captalento</Title>
        <LineTitle variant="blue" shape="none" outlined />
      </div>
    </div>
  );
}
