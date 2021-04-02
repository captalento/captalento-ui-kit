import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { RiArrowRightLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

import { Input, Button } from '../../src';

export default { title: 'Elements/Input' };

export function Default() {
  return (
    <div style={{ width: '360px' }}>
      <Input name="captalento" placeholder="Email" type="text" />
    </div>
  );
}

export function Focus() {
  return (
    <div style={{ width: '360px' }}>
      <Input autoFocus name="captalento" placeholder="Email" type="text" />
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
  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite seu primeiro nome"
        type="text"
        icon={AiOutlineUser}
      />
    </div>
  );
}

export function IconFocus() {
  return (
    <div style={{ width: '360px' }}>
      <Input
        autoFocus
        name="captalento"
        placeholder="Digite seu primeiro nome"
        type="text"
        icon={AiOutlineUser}
      />
    </div>
  );
}

export function IconError() {
  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite seu primeiro nome"
        type="text"
        icon={AiOutlineUser}
        error={'Message error descripition'}
      />
    </div>
  );
}
// IconError.storyName= 'Icon error';
export function TypePassword() {
  return (
    <div style={{ width: '360px' }}>
      <Input name="captalento" placeholder="Digite sua senha" type="password" />
    </div>
  );
}

TypePassword.storyName = 'Type password';

export function TypePasswordWithIcon() {
  return (
    <div style={{ width: '360px' }}>
      <Input
        name="captalento"
        placeholder="Digite sua senha"
        type="password"
        icon={BiLockAlt}
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
