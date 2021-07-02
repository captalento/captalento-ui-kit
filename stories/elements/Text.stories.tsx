import React from 'react';

import { Text } from '../../src';

export default { title: 'Elements/Text' };

export function Default() {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere
      dignissimos blanditiis illo quae alias atque eveniet provident! Amet quo,
      natus voluptatem sunt culpa asperiores totam sapiente ratione facere
      error.
    </Text>
  );
}

export function Color() {
  return (
    <Text variant="blue-dark">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      blanditiis nostrum soluta nulla quisquam enim iure impedit et delectus
      facere aut, fugiat doloribus quos corrupti perferendis rem quasi expedita
      dolore?
    </Text>
  );
}

export function OtherSizes() {
  return (
    <div className="grid gap-y-4">
      <Text size="4xl">captalento</Text>
      <Text size="x-large">captalento</Text>
      <Text size="large">captalento</Text>
      <Text size="medium">captalento</Text>
      <Text size="small">captalento</Text>
      <Text size="x-small">captalento</Text>
      <Text size="2xs">captalento</Text>
      <Text size="3xs">captalento</Text>
    </div>
  );
}
