import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src';

import { AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';

storiesOf('Elements | Input', module)
  .add('Default', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite seu e-mail"
          type="text"
        />
      </div>
    );
  })
  
  .add('Focus', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          autoFocus
          name="captalento"
          placeholder="Digite seu e-mail"
          type="text"
        />
      </div>
    );
  })

  .add('Error', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite seu e-mail"
          type="text"
          error={'Message error descripition'}
        />
      </div>
    );
  })

  .add('Icon', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite seu primeiro nome"
          type="text"
          icon={AiOutlineUser}
        />
      </div>
    );
  })

  .add('Icon focus', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          autoFocus
          name="captalento"
          placeholder="Digite seu primeiro nome"
          type="text"
          icon={AiOutlineUser}
        />
      </div>
    );
  })

  .add('Icon error', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite seu primeiro nome"
          type="text"
          icon={AiOutlineUser}
          error={'Message error descripition'}
        />
      </div>
    );
  })

  .add('Type password', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite sua senha"
          type="password"
        />
      </div>
    );
  })

  .add('Type password with icon', () => {
    return (
      <div style={{ width: '300px' }}>
        <Input
          name="captalento"
          placeholder="Digite sua senha"
          type="password"
          icon={BiLockAlt}
        />
      </div>
    );
  })