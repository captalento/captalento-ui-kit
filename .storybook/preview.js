import 'loki/configure-react';
import '../tailwind.css'
import './reset.css'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'Dark', value: '#000' },
      { name: 'Blue', value: '#266bff' },
      { name: 'Grey', value: '#F2F2F2' },
      { name: 'Bright', value: '#FFF' },
    ],
  },
  layout: 'centered',
};
