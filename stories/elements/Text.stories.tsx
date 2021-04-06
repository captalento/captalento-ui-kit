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
    <Text variant="blue">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      blanditiis nostrum soluta nulla quisquam enim iure impedit et delectus
      facere aut, fugiat doloribus quos corrupti perferendis rem quasi expedita
      dolore?
    </Text>
  );
}

export function OtherSize() {
  return (
    <Text size="large">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      blanditiis nostrum soluta nulla quisquam enim iure impedit et delectus
      facere aut, fugiat doloribus quos corrupti perferendis rem quasi expedita
      dolore?
    </Text>
  );
}
