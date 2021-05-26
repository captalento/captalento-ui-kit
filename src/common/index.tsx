export type Size =
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '4xl'
  | '3xs'
  | '2xs';

export type Variant =
  | 'black'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'blue-dark'
  | 'gray'
  | 'purple';

export interface IbaseProps {
  size: Size;
  variant: Variant;
}

export type SubmitFn<T> = (args: T) => void;
