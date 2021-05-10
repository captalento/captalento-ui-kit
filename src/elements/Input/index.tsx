import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { IconBaseProps } from 'react-icons';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id?: string;
  placeholder: string;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

export function Input({
  className,
  id,
  value,
  error,
  placeholder,
  icon: Icon,
  type,
  ref,
  ...props
}: InputProps): JSX.Element {
  const [showHide, setShowHide] = React.useState(false);
  const IconPassword = showHide ? 'text' : 'password';

  const handleClick = React.useCallback(() => {
    setShowHide((showHide) => !showHide);
  }, []);

  return (
    <div className={classNames(`input ${error ? 'error' : null}`, className)}>
      <div className="control">
        <input
          className={`field ${Icon ? 'icon' : null}`}
          id={id}
          value={value}
          type={type === 'password' ? IconPassword : type}
          ref={(e) => {
            if (ref) {
              ref.current = e;
            }
          }}
          {...props}
        />

        <label
          className={classNames(`label ${Icon ? 'icon' : null}`, {
            'is-shifted': type === 'date' || !!value,
          })}
          htmlFor={id}
        >
          {placeholder}
        </label>

        {Icon ? <Icon size={26} className="absolute h-full ml-3" /> : null}

        {type === 'password' ? (
          <label
            htmlFor={id}
            className="flex items-center absolute h-full right-0 mr-3 focus:outline-none"
            onClick={handleClick}
          >
            {type === 'password' && !showHide && (
              <AiOutlineEyeInvisible size={28} />
            )}
            {type === 'password' && showHide && <AiOutlineEye size={28} />}
          </label>
        ) : null}
        {error ? (
          <span className="absolute -bottom-5 text-3xs text-red-100 ml-2 animate-animaTop">
            {error}
          </span>
        ) : null}
      </div>
    </div>
  );
}
