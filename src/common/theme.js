export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    primary: '#212121',
    secondary: '#757575',
    black: '#000000',
    white: '#FFFFFF',
    teal: 'teal',
    cyan: '#E0FFFF',
  },
  spacing: (...args) => args.map(v => `${v * 4}px`).join(' '),
  transition: (...args) =>
    `transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
     transition-property: ${args.join(' ')}`,
});
