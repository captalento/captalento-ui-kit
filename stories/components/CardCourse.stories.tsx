import React from 'react';
import { CardCourse } from '../../src';

export default { title: 'Components/CardCourse' };
import Perfil from '../../src/assets/perfil.jpeg';

export function Default() {
  return (
    <CardCourse
      video={<div className="w-full h-full rounded-t-2xl bg-red-100">Bone</div>}
      teacherImg={Perfil}
      teacherName="Ygor Mendes"
      courseName="HTML 5"
      courseLevel="Básico"
      courseDuration={1.3}
    />
  );
}
