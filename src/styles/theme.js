import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "nunito",
    size: {
      mini: '12px',
      tiny: '13px',
      small: '14px',
      mediumSmall: '16px',
      medium: '18px',
      large: '20px',
      huge: '24px',
      extra: '28px'
    },
    weight: {
      light: '300',
      normal: '400',
      bold: '700'
    }
  },
  palette: {
    primary: {
      main: "#CBD736",
      secondary: "#C9D636"
    },
    text: {
      primary: "#9F9F9F",
      secondary: "#8C8C8C",
      tertiary: "#CBD736",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#D3D3D3"
    },
    warning: {
      main: "#FF0000"
    },
    white: {
      main: "#FFFFFF"
    },
    black: {
      main: "#000000"
    },
    background:{
      primary: "#1E1E1E",
      secondary: "#303030",
      tertiary: "#1B1B1B"
    },
    border: {
      primary: "#606060"
    }
  }
});

export default theme;