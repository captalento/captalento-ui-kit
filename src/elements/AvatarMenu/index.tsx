import React from 'react';

import { IconBaseProps } from 'react-icons';
import { Link } from '@reach/router';
import classNames from 'classnames';
import { Text } from '../Text';
import { AiOutlineUser } from 'react-icons/ai';

export interface NewOption {
  icon: React.ComponentType<IconBaseProps> | null;
  message: string;
  funcEvent?: () => void;
  route?: string;
}

export interface PropsAvatarMenu extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  newOption?: NewOption;
}

function AvatarMenu({
  className,
  isActive,
  newOption,
  ...rest
}: PropsAvatarMenu) {
  const classes = classNames(
    'avatarMenu',
    [isActive ? 'isShow' : 'isHidden'],
    className
  );

  const [options, setOptions] = React.useState<Array<NewOption>>([
    { icon: AiOutlineUser, message: 'Ver perfil', route: '/user/profile' },
  ]);

  React.useEffect(() => {
    if (newOption) {
      setOptions((oldValue) => [...oldValue, newOption]);
    }
  }, []);

  return (
    <div {...rest} className={classes}>
      {options.map(({ icon: Icon, funcEvent, message, route }) => {
        return (
          <div
            key={message}
            onClick={funcEvent ? () => funcEvent() : () => null}
          >
            {Icon ? <Icon size={20} /> : null}
            {route ? (
              <Link to={route}>{message}</Link>
            ) : (
              <Text variant="blue-dark" size="2xs">
                {message}
              </Text>
            )}
          </div>
        );
      })}
    </div>
  );
}

export { AvatarMenu };
