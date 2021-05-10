import React from 'react';
import { BiLockAlt, BiUserPin } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

import { Input, Button } from '../../src';

export default { title: 'Elements/Input' };

export function Default() {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-80">
      <Input
        id="taxId"
        placeholder="Código"
        name="taxId"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
export function Icon() {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-80">
      <Input
        id="taxId"
        placeholder="E-mail"
        name="taxId"
        value={value}
        icon={AiOutlineUser}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export function Error() {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-80">
      <Input
        id="taxId"
        placeholder="Senha"
        name="taxId"
        error="Campo obrigatório"
        value={value}
        icon={BiLockAlt}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export function Password() {
  const [value, setValue] = React.useState('');

  return (
    <div className="w-80">
      <Input
        type="password"
        id="taxId"
        placeholder="Senha"
        name="taxId"
        value={value}
        icon={BiLockAlt}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export function InputForm() {
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [passwordConfirmValue, setPasswordConfirmValue] = React.useState('');

  return (
    <form className="w-80">
      <Input
        type="email"
        id="email"
        placeholder="Senha"
        name="email"
        value={emailValue}
        icon={BiUserPin}
        onChange={(e) => setEmailValue(e.target.value)}
        className="mb-4"
      />

      <Input
        type="password"
        id="password"
        placeholder="Senha"
        name="password"
        value={passwordValue}
        icon={BiLockAlt}
        onChange={(e) => setPasswordValue(e.target.value)}
        className="mb-4"
      />

      <Input
        type="password"
        id="confirmPassword"
        placeholder="Confirmar Senha"
        name="confirmPassword"
        value={passwordConfirmValue}
        icon={BiLockAlt}
        onChange={(e) => setPasswordConfirmValue(e.target.value)}
        className="mb-4"
      />

      <Button type="button">Logar</Button>
    </form>
  );
}

export function EffectError() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState<string>();
  setTimeout(() => {
    setError('Campo obrigatório');
  }, 2000);

  return (
    <div className="w-80">
      <Input
        type="password"
        id="taxId"
        placeholder="Senha"
        name="taxId"
        error={error}
        value={value}
        icon={BiLockAlt}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
