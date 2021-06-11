import React from 'react';
import { Text } from '../Text';

import { FaUser } from 'react-icons/fa';
import { Size } from '../../common';

interface User {
  initial: string;
  img: {
    src: string | undefined;
    alt: string;
  };
}

export interface PropsAvatar extends React.HTMLAttributes<HTMLDivElement> {
  user: User;
  sizeText?: Size;
  sizeIcon?: number;
}

function Avatar({ user, sizeText, sizeIcon, className, ...rest }: PropsAvatar) {
  const { img, initial } = user;
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
        <img
          src={img.src}
          alt={img.alt}
          className={`${className} w-12 rounded-full`}
          onError={() => setIsLoaded(true)}
          onLoad={() => setIsLoaded(false)}
          {...rest}
        />
      )}
    </>
  );
}

export { Avatar };
