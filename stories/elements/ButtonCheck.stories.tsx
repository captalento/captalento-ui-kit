import React from 'react';

import { ButtonCheck } from '../../src';

export default { title: 'Elements/ButtonCheck' };

export function WhiteImg() {
  const [done1, setDone1] = React.useState(false);
  const [done2, setDone2] = React.useState(false);
  const [done3, setDone3] = React.useState(false);
  return (
    <div className="flex flex-col gap-y-8">
      <ButtonCheck done={done1} onClick={() => setDone1(!done1)} />
      <ButtonCheck done={done2} onClick={() => setDone2(!done2)} />
      <ButtonCheck done={done3} onClick={() => setDone3(!done3)} />
    </div>
  );
}
