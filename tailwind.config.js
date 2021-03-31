module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      '3xs': '0.75rem', // 12px
      '2xs': '0.875rem', // 14px
      xs: '1rem', // 16px
      sm: '1.125rem', // 18px
      base: '1.25rem', // 20px
      lg: '1.5rem', // 24px
      xl: '1.75rem', // 28px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '2.75rem', // 44px
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
      '7xl': '4rem', // 64px
      '8xl': '4.5rem', // 72px
      '9xl': '6rem', // 96px
      '10xl': '14.375rem', // 230px
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: { 100: '#EDEFF9', 200: '#8E92A3' },
      gray: '#A0A2A4',
      red: '#FB8686',
      green: { 100: '#ADFF9F', 200: '#88DD7A' },
      blue: { 100: '#64A4ED', 200: '#4887CE' },
      'blue-dark': '#243B55',
      'blue-card': '#405B79',
      disabled: '#ADCCF0',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      blue: '0px -14px 0px -4px #64A4ED',
      green: '0px -14px 0px -4px #ADFF9F',
      DEFAULT: '0px 4px 6px #141E30, 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px  0px 4px 16px #141E30, 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px  0px 4px 16px #141E30, 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px  0px 4px 16px #141E30, 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
