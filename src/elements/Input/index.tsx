import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import classnames from 'classnames';

import { Label, Error } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
  register?: (e: HTMLInputElement | null) => void;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

function Input({
  ref,
  name,
  icon: Icon,
  type,
  className,
  register,
  error,
  ...rest }: InputProps): JSX.Element {
  const [showHide, setShowHide] = React.useState(false);
  const IconPassword = showHide ? 'text' : 'password';
  
  const handleClick = React.useCallback(() => {
    setShowHide(showHide => !showHide);
  }, []);

  return (
    <>
      <Label
        className={
          classnames(className, error ? 'borderError' : '')
        }
        error={error}
      >
        {Icon && <Icon size={28} />}
        <input
          {...rest} 
          name={ name }
          type={type === 'password' ? IconPassword : type}
          ref={(e) => {
            if (register) {
              register(e);
            }
            if (ref) {
              ref.current = e;
            }
          }}
        />

        {
          type === 'password' && !showHide &&
          <AiOutlineEyeInvisible onClick={handleClick} size={30} />
        }
        {
          type === 'password' && showHide &&
          <AiOutlineEye onClick={handleClick} size={30} />
        }
      </Label>
      {error && <Error>{error}</Error>}
    </>
  );
};

export { Input };
