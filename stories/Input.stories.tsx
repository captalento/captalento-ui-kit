import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

storiesOf('Elements | Input', module)
  .add('Default', () => {
    return (
      <Input
        name="captalento"
        placeholder="Digite seu e-mail"
        type="text"
      />
    );
  })
  .add('focus', () => {
    return (
      <Input
        name="captalento"
        placeholder="Digite seu e-mail"
        type="text"
      />
    );
  })
