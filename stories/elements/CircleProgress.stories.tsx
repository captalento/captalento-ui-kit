import React from 'react';

import { CircleProgress } from '../../src';

export default { title: 'Elements/CircleProgress' };

export function ZeroPercentage() {
  const [percentage, setPercentage] = React.useState<number>(0);
  return (
    <div className="gap-y-4	flex flex-col items-center">
      <CircleProgress index={1} percentage={percentage} />
      <CircleProgress index={2} percentage={percentage} />
      <CircleProgress index={3} percentage={percentage} />
      <CircleProgress index={4} percentage={percentage} />
      <CircleProgress index={5} percentage={percentage} />
      <button
        onClick={() =>
          setPercentage((percentage) => (percentage = percentage + 33.33))
        }
      >
        Feito
      </button>
    </div>
  );
}
