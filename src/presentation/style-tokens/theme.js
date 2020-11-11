const { sm, md, lg, xl } = {
  sm: '48em',
  md: '62em',
  lg: '75em',
  xl: '112.5em',
};

const theme = {
  breakpoints: [sm, md, lg, xl],
  colors: {
    gray20: '#F2F2F3',
    gray300: '#72737A',
    gray400: '#595A63',
    gray500: '#454550',
    gray800: '#070817',
    purple20: '#DFD5FF',
    green100: '#65A300',
    purple200: '#3F2787',
    purple800: '#1D1647',
    white: '#FFFFFF',
  },
  font: 'Lato, Arial, sans-serif',
  fontSizes: [14, 16, 20],
  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  space: [0, 4, 8, 16, 32, 64],
  radii: [6, 8],
  radius: '6px',
};

export default theme;
