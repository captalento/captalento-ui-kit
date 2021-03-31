import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from '../../src';

export default { title: 'Elements/Link' };

export function Default() {
  return <Link href="http://app.captalento.com/">Cadastrar</Link>;
}

export function WithIcon() {
  return (
    <Link href="http://app.captalento.com/" icon={HiArrowNarrowRight}>
      Cadastrar
    </Link>
  );
}

export function Button() {
  return (
    <div className="w-72">
      <Link href="http://app.captalento.com/" isButton>
        Cadastrar
      </Link>
    </div>
  );
}
export function Outline() {
  return (
    <div className="w-72">
      <Link href="http://app.captalento.com/" isButton isOutline>
        Cadastrar
      </Link>
    </div>
  );
}

export function ButtonWithIcon() {
  return (
    <div className="w-72">
      <Link
        href="http://app.captalento.com/"
        icon={HiArrowNarrowRight}
        isButton
      >
        Cadastrar
      </Link>
    </div>
  );
}

export function OultlineWithIcon() {
  return (
    <div className="w-72">
      <Link
        href="http://app.captalento.com/"
        icon={HiArrowNarrowRight}
        isButton
        isOutline
      >
        Cadastrar
      </Link>
    </div>
  );
}
