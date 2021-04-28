import React from 'react';
import { BiLockAlt } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';

import { Input } from '../../src';

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
