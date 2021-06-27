import React from 'react';

import { ListStyle } from '../../src';

export default { title: 'stylesEffect/ListStyle' };

export function Default() {
  return (
    <div className="grid gap-y-4">
      <ListStyle variant="black" />
      <ListStyle variant="blue" />
      <ListStyle variant="green" />
      <ListStyle variant="purple" />
      <ListStyle variant="white" />
      <ListStyle variant="red" />
    </div>
  );
}
