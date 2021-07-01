import React from 'react';
import { Text } from '../Text';

import { FaUser } from 'react-icons/fa';
import { Size } from '../../common';

export interface PropsAvatar extends React.HTMLAttributes<HTMLDivElement> {
  initial?: string;
  img: {
    src: string | undefined;
    alt: string;
  };
  borderDecoration?: boolean;
  sizeText?: Size;
  sizeIcon?: number;
  size?: number;
}

function Avatar({
  initial,
  img,
  size,
  sizeText,
  sizeIcon,
  borderDecoration,
  className,
  ...rest
}: PropsAvatar) {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  return (
    <>
      {isLoaded ? (
        <div
          {...rest}
          className={`${className} w-12 h-12 flex justify-center items-center rounded-full bg-black-100`}
        >
          {!img.src && !initial ? (
            <FaUser size={sizeIcon} className="text-green-100" />
          ) : (
            <Text variant="green" size={sizeText} className={`font-semibold`}>
              {initial}
            </Text>
          )}
        </div>
      ) : (
        <div
          style={
            size
              ? { width: `${size * 1.115}px`, height: `${size * 1.115}px` }
              : undefined
          }
          className={`${borderDecoration ? 'borderDecoration' : null}`}
        >
          <img
            style={
              size ? { width: `${size}px`, height: `${size}px` } : undefined
            }
            src={img.src}
            alt={img.alt}
            className={`${className} w-12 rounded-full`}
            onError={() => setIsLoaded(true)}
            onLoad={() => setIsLoaded(false)}
            {...rest}
          />
        </div>
      )}
    </>
  );
}

export { Avatar };
