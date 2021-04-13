export type Size = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type Variant =
  | 'black'
  | 'white'
  | 'blue'
  | 'red'
  | 'green'
  | 'blue-dark';

export interface IbaseProps {
  size: Size;
  variant: Variant;
}
