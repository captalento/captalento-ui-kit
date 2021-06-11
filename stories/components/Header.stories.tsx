import React from 'react';

import { Header } from '../../src/components';
import {
  MenuDesktop,
  Avatar,
  AvatarMenu,
  MenuMobile,
} from '../../src/elements';
import Perfil from '../../src/assets/perfil.jpeg';
import { IoClose } from 'react-icons/io5';
import { CgMenuRight } from 'react-icons/cg';

export default { title: 'Components/Header' };

export function SiteDeslogado() {
  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <MenuDesktop />
      </Header>
    </div>
  );
}

export function SiteLogado() {
  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <MenuDesktop isLogued />
      </Header>
    </div>
  );
}

export function AppDeslogado() {
  return (
    <div style={{ width: '1000px' }}>
      <Header />
    </div>
  );
}

export function AppLogado() {
  const [active, setActive] = React.useState(false);

  const user = {
    img: {
      src: Perfil,
      alt: 'Imagem do usuário',
    },
    initial: 'Y',
  };

  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <button
          onClick={() => setActive(!active)}
          onBlur={() => setActive(false)}
          className="focus:outline-none"
        >
          <Avatar user={user} className="cursor-pointer relative" />
        </button>
        <AvatarMenu
          isActive={active}
          className="absolute top-96 right-32 -mt-16"
        />
      </Header>
    </div>
  );
}

export function SiteDeslogadoMobile() {
  const [menuActive, setMenuActive] = React.useState(false);

  return (
    <div style={{ width: '414px' }} className="absolute top-0">
      <Header>
        <button
          aria-label={`${menuActive ? 'Abrir' : 'Fechar'} menu`}
          aria-expanded={menuActive}
          aria-haspopup={true}
          onClick={() => setMenuActive(!menuActive)}
          className="focus:outline-none z-20 text-blue-100 lg:hidden"
        >
          {menuActive ? <IoClose size={40} /> : <CgMenuRight size={40} />}
        </button>

        <MenuDesktop className="hidden lg:block" />
        <MenuMobile className="lg:hidden" menuActive={menuActive} />
      </Header>
    </div>
  );
}
export function AppLogadoMobile() {
  const [active, setActive] = React.useState(false);

  const user = {
    img: {
      src: Perfil,
      alt: 'Imagem do usuário',
    },
    initial: 'Y',
  };

  return (
    <div style={{ width: '414px' }} className="absolute top-0">
      <Header>
        <button
          onClick={() => setActive(!active)}
          onBlur={() => setActive(false)}
          className="focus:outline-none"
        >
          <Avatar user={user} className="cursor-pointer relative" />
        </button>
        <AvatarMenu
          isActive={active}
          className="absolute top-20 right-0 pr-16"
        />
      </Header>
    </div>
  );
}
