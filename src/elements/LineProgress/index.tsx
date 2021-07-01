import React, { HTMLAttributes } from 'react';
import { Text } from '../Text';

export interface PropsLineProgress extends HTMLAttributes<HTMLDivElement> {
  completionPercentage: number;
  bgColor?: 'grayDark' | 'black';
}

function LineProgress({
  completionPercentage,
  bgColor = 'black',
  className,
}: PropsLineProgress) {
  return (
    <div className={`${className} flex items-center`}>
      <div className="w-full h-4 flex items-center relative">
        <div
          className={`h-1 rounded-r-full rounded-l-full w-full ${
            bgColor === 'black' ? 'bg-black-300' : 'bg - black - 100'
          } bg-black-100 absolute`}
        />
        <div
          className="h-1 rounded-r-full rounded-l-full bg-green-100 absolute"
          style={{
            width: `${completionPercentage}%`,
            transition: 'width 0.6s',
          }}
        />
      </div>
      <Text
        style={{ minWidth: '26.16px', maxWidth: '26.16px' }}
        className="ml-2"
        size="3xs"
        variant="gray"
      >
        {completionPercentage}%
      </Text>
    </div>
  );
}

export { LineProgress };
