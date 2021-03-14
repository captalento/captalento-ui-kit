import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import classnames from 'classnames';

import { Label } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  error?: string;
  firtIcon?: React.ComponentType<IconBaseProps>;
  register?: (e: HTMLInputElement | null) => void;
}

function Input({ 
  name,
  firtIcon: FirstIcon,
  type,
  className,
  register,
  error,
  ...rest }: InputProps): JSX.Element {
  const [showHide, setShowHide] = React.useState(false);
  const IconPassword = showHide ? 'text' : 'password';
  
  const inputRef = React.useRef<HTMLInputElement | null>(null);

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
        {FirstIcon && <FirstIcon size={28} />}
        <input
          {...rest} 
          name={ name }
          type={type === 'password' ? IconPassword : type}
          ref={(e) => {
            if (register) {
              register(e);
            }
            inputRef.current = e;
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
      {error && <p>{error}</p>}
    </>
  );
};

export { Input };
