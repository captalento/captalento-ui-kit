import React from 'react';

import { Avatar } from '../../src';

import Perfil from '../../src/assets/perfil.jpeg';

export default { title: 'Elements/Avatar' };

export function WhiteImg() {
  const user = {
    img: {
      src: Perfil,
      alt: 'Imagem do usuário',
    },
    initiall: 'Y',
  };

  return <Avatar user={user} />;
}

export function withoutImg() {
  const user = {
    img: {
      src: '',
      alt: 'Imagem do usuário',
    },
    initiall: 'Y',
  };

  return <Avatar user={user} />;
}

export function withoutImgAndInitiall() {
  const user = {
    img: {
      src: '',
      alt: 'Imagem do usuário',
    },
    initiall: '',
  };

  return <Avatar user={user} />;
}

export function otherSize() {
  const user = {
    img: {
      src: '',
      alt: 'Imagem do usuário',
    },
    initiall: 'Y',
  };

  const user2 = {
    img: {
      src: '',
      alt: 'Imagem do usuário',
    },
    initiall: '',
  };

  return (
    <>
      <Avatar user={user} sizeText="4xl" className="w-32 h-32 mb-8" />
      <Avatar user={user2} sizeIcon={56} className="w-32 h-32" />
      <div></div>
    </>
  );
}

export function WhiteImgAndEvent() {
  const [active, setActive] = React.useState(false);

  const user = {
    img: {
      src: Perfil,
      alt: 'Imagem do usuário',
    },
    initiall: 'Y',
  };

  return (
    <>
      <Avatar
        user={user}
        className="cursor-pointer"
        onClick={() => setActive(!active)}
      />

      {active ? <div className="bg-purple-100 w-92 h-92">asdasd</div> : null}
    </>
  );
}
