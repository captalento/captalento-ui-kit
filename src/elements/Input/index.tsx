import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import classNames from 'classnames';


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
  value,
  icon: Icon,
  type,
  className,
  register,
  placeholder,
  error,
  ...rest
}: InputProps): JSX.Element {
  const [showHide, setShowHide] = React.useState(false);
  const IconPassword = showHide ? 'text' : 'password';

  const handleClick = React.useCallback(() => {
    setShowHide((showHide) => !showHide);
  }, []);

  const classes = classNames(
    'input',
    {
      'is-error': error,
      'is-icon': Icon,
      'is-value': value,
    },
    className
  );

  return (
    <>
      <label className={classes}>
        {Icon && <Icon size={32} className="ml-5 mr-1" />}

        <p
          className={`
          ${value  ? 'contains-text' : ''} 
          
        `}
        >
          {placeholder}
        </p>

        <input
          {...rest}
          className={`${value ? 'contains-text' : ''}`}
          value={value}
          name={name}
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

        {type === 'password' && !showHide && (
          <AiOutlineEyeInvisible
            onClick={handleClick}
            className="mr-5"
            size={34}
          />
        )}
        {type === 'password' && showHide && (
          <AiOutlineEye onClick={handleClick} className="mr-5" size={34} />
        )}
      </label>
      {error && (
        <span className="animate-animatop block text-3xs text-red ml-2 mb-1">
          {error}
        </span>
      )}
    </>
  );
}

export { Input };
