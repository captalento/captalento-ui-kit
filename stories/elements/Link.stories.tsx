import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from '../../src';

export default { title: 'Elements/Link' };

export function Default() {
  return (
    <div className="flex flex-col">
      <Link href="http://app.captalento.com/">Cadastrar</Link>
      <Link variant="blue" href="http://app.captalento.com/">
        Cadastrar
      </Link>
      <Link variant="green" href="http://app.captalento.com/">
        Cadastrar
      </Link>
      <Link variant="purple" href="http://app.captalento.com/">
        Cadastrar
      </Link>
    </div>
  );
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
    <div className="grid gap-y-4">
      <div className="w-72">
        <Link href="http://app.captalento.com/" isButton>
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link variant="blue" href="http://app.captalento.com/" isButton>
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link variant="green" href="http://app.captalento.com/" isButton>
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link variant="purple" href="http://app.captalento.com/" isButton>
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link variant="red" href="http://app.captalento.com/" isButton>
          Cadastrar
        </Link>
      </div>
    </div>
  );
}
export function Outline() {
  return (
    <div className="grid gap-y-4">
      <div className="w-72">
        <Link href="http://app.captalento.com/" isButton isOutline>
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link
          variant="blue"
          href="http://app.captalento.com/"
          isButton
          isOutline
        >
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link
          variant="green"
          href="http://app.captalento.com/"
          isButton
          isOutline
        >
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link
          variant="purple"
          href="http://app.captalento.com/"
          isButton
          isOutline
        >
          Cadastrar
        </Link>
      </div>
      <div className="w-72">
        <Link
          variant="red"
          href="http://app.captalento.com/"
          isButton
          isOutline
        >
          Cadastrar
        </Link>
      </div>
    </div>
  );
}

export function ButtonWithIcon() {
  return (
    <Link href="http://app.captalento.com/" icon={HiArrowNarrowRight} isButton>
      Cadastrar
    </Link>
  );
}

export function ButtonOtherSize() {
  return (
    <Link sizeButton="b-small" href="http://app.captalento.com/" isButton>
      Cadastrar
    </Link>
  );
}

export function OultlineWithIcon() {
  return (
    <Link
      href="http://app.captalento.com/"
      icon={HiArrowNarrowRight}
      isButton
      isOutline
    >
      Cadastrar
    </Link>
  );
}
