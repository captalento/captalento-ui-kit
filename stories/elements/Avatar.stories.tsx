import React from 'react';

import { Avatar } from '../../src';

import Perfil from '../../src/assets/perfil.jpeg';

export default { title: 'Elements/Avatar' };

export function WhiteImg() {
  return <Avatar img={{ src: Perfil, alt: 'Imagem do usuário' }} />;
}

export function withoutImg() {
  return <Avatar img={{ src: '', alt: 'Imagem do usuário' }} initial="Y" />;
}

export function withoutIcon() {
  return <Avatar img={{ src: '', alt: 'Imagem do usuário' }} />;
}

export function otherSize() {
  return (
    <>
      <Avatar img={{ src: Perfil, alt: 'Imagem do usuário' }} size={120} />
      <Avatar
        img={{ src: '', alt: 'Imagem do usuário' }}
        initial="Y"
        sizeIcon={56}
        sizeText="4xl"
        className="w-48 h-48"
      />
    </>
  );
}

export function withBorderStyle() {
  return (
    <>
      <Avatar
        img={{ src: Perfil, alt: 'Imagem do usuário' }}
        borderDecoration
        size={80}
      />
    </>
  );
}

export function WhiteImgAndEvent() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <Avatar
        img={{ src: Perfil, alt: 'Imagem do usuário' }}
        className="cursor-pointer"
        onClick={() => setActive(!active)}
      />

      {active ? <div className="bg-purple-100 w-92 h-92">asdasd</div> : null}
    </>
  );
}
