import React from 'react';
import { Button, CardCourse } from '../../src';

export default { title: 'Components/CardCourse' };
import Perfil from '../../src/assets/perfil.jpeg';

export function Default() {
  return (
    <CardCourse
      image={{ src: '', alt: '' }}
      teacher={{
        id: '1',
        image: { src: Perfil, alt: 'Professor' },
        initial: 'Y',
        name: 'Ygor Mendes',
      }}
      name="HTML 5"
      level="Básico"
      duration={1.3}
    >
      <Button className="w-full mt-4" size="small" variant="black">
        Ver mais
      </Button>
    </CardCourse>
  );
}

export function CardStart() {
  return (
    <CardCourse image={{ src: '', alt: '' }} level="Básico" duration={1.3}>
      <Button className="w-full mt-4" size="small" variant="black">
        Começar curso
      </Button>
    </CardCourse>
  );
}

export function CardProgress() {
  return (
    <CardCourse image={{ src: '', alt: '' }} isRegistered={true} progress={75}>
      <Button className="w-full mt-4" size="small" variant="black">
        Continuar
      </Button>
    </CardCourse>
  );
}

export function OtherCardProgress() {
  return (
    <CardCourse
      image={{ src: '', alt: '' }}
      isRegistered={true}
      progress={75}
      name="HTML 5"
    >
      <Button className="w-full mt-4" size="small" variant="black">
        Continuar
      </Button>
    </CardCourse>
  );
}
