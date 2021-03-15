import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input, Button } from '../src';

import { AiOutlineUser } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { RiArrowRightLine } from 'react-icons/ri';

function InputComponent() {
  const [actived, setActived] = React.useState<boolean>(true);
  setTimeout(() => {
    setActived(!actived)
  }, 3000)
  
	
	return (
    <div style={{ width: '300px' }}>
      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
        error={actived ? 'Error message' : ''}
      />

      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
        error={actived ? 'Error message' : ''}
      />

      <Button icon={RiArrowRightLine}>Logar</Button>
    </div>
  );
}


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

  .add('Two inputs errors', () => {
    return (
      <InputComponent />
    );
  })