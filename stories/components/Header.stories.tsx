import React from 'react';

import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { IoExitOutline } from 'react-icons/io5';

import { Header } from '../../src/components';
import { Link } from '../../src/elements';
// import perfil from '../../src/assets/perfil.jpeg';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

export default { title: 'Components/Header' };

export function SiteDeslogado() {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <div className="containerLinks">
          <div className="containerLink">
            <div className="link">
              <Link href="/">Home</Link>
              <div />
            </div>
          </div>

          <div className="containerLink">
            <div className="link">
              <Link href="/">Sobre nós</Link>
              <div />
            </div>
          </div>

          <div className="containerLink">
            <div className="link">
              <Link href="https://app.captalento.com/register">
                Cadastre-se
              </Link>
              <div />
            </div>
          </div>

          <Link
            href="https://app.captalento.com/login"
            isButton
            sizeButton="b-small"
            variant="blue"
            className="w-20"
          >
            Entrar
          </Link>
        </div>

        <button
          type="button"
          className={`z-20 focus:outline-none lg:hidden	${
            menuActive ? 'fixed -right-0 mr-8' : null
          }`}
          onClick={() => setMenuActive(!menuActive)}
        >
          {menuActive ? (
            <IoClose size={40} className="text-blue-100 lg:hidden sm:hidden" />
          ) : (
            <HiMenuAlt3
              size={40}
              className="text-blue-100 lg:hidden sm:hidden"
            />
          )}
        </button>
      </Header>
    </div>
  );
}

export function SiteLogado() {
  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <div className="containerLinks">
          <div className="containerLink">
            <div className="link">
              <Link href="/">Home</Link>
              <div />
            </div>
          </div>

          <div className="containerLink">
            <div className="link">
              <Link href="/">Sobre nós</Link>
              <div />
            </div>
          </div>

          <Link
            href="https://app.captalento.com/login"
            isButton
            sizeButton="b-small"
            variant="blue"
            className="w-20"
          >
            Entrar
          </Link>
        </div>
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
  const [userMenu, setUserMenu] = React.useState(false);
  return (
    <div style={{ width: '1000px' }}>
      <Header>
        <div className="user">
          <AiOutlineBell size={20} className="bell" />
          <div
            className="bg-blue-100 w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setUserMenu((oldValue) => !oldValue)}
          />

          {userMenu ? (
            <div className="userMenu" onBlur={() => setUserMenu(false)}>
              <div className="options">
                <AiOutlineUser size={20} />
                <p>Ver perfil</p>
              </div>

              <div className="options">
                <IoExitOutline size={20} />
                <p>Sair</p>
              </div>
            </div>
          ) : null}
        </div>
      </Header>
    </div>
  );
}
