import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { RiArrowRightLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

import { Input, Button } from '../../src';

export default { title: 'Elements/Input' };

export function Default() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Email"
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

export function Focus() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        autoFocus
        name="captalento"
        placeholder="Email"
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

export function Error() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Email"
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        error={'Message error descripition'}
      />
    </div>
  );
}

export function Icon() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite seu primeiro nome"
        type="text"
        icon={AiOutlineUser}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

export function IconFocus() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        autoFocus
        name="captalento"
        placeholder="Digite seu primeiro nome"
        type="text"
        icon={AiOutlineUser}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

export function IconError() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Nome"
        type="text"
        icon={AiOutlineUser}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        error={'Message error descripition'}
      />
    </div>
  );
}
// IconError.storyName= 'Icon error';
export function TypePassword() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

TypePassword.storyName = 'Type password';

export function TypePasswordWithIcon() {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
}

TypePasswordWithIcon.storyName = 'Type password with icon';

export function InputComponent() {
  const [actived, setActived] = React.useState<boolean>(true);
  setTimeout(() => {
    setActived(!actived);
  }, 3000);

  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
        error={actived ? 'Error message' : ''}
        className="mb-4"
      />

      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
        error={actived ? 'Error message' : ''}
        className="mb-4"
      />

      <Button icon={RiArrowRightLine} className="w-full">
        Logar
      </Button>
    </div>
  );
}

InputComponent.storyName = 'Two inputs errors';
