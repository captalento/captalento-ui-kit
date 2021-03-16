// import * as React from 'react';
// import classNames from 'classnames';

// import { IProps, IBaseProps, DISPLAYNAME_PREFIX } from '../../common/props';
// import { Icon } from '../Icon';

// export interface TitleProps extends IProps, IBaseProps, React.HtmlHTMLAttributes<HTMLHeadingElement> {
//   tag?: keyof JSX.IntrinsicElements;
//   icon?: string;
// }

// export const Title: React.FC<TitleProps> = ({
//   tag = 'h1',
//   size = 'medium',
//   variant = 'black',
//   icon,
//   children,
//   className,
//   ...props
// }) => {
//   const titleClasses = classNames(
//     'title',
//     {
//       [`is-${size}`]: true,
//       [`is-${variant}`]: true,
//     },
//     className
//   );

//   return typeof children !== 'undefined'
//     ? React.createElement(
//         tag as string,
//         { className: titleClasses, ...props },
//         icon ? <Icon variant={variant} name={icon} /> : null,
//         children
//       )
//     : React.createElement(tag as string, { className: titleClasses, ...props });
// };

// Title.displayName = `${DISPLAYNAME_PREFIX}.Title`;