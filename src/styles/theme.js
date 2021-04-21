import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "nunito"
  },
  palette: {
    primary: {
      main: "#ccff33"
    },
    warning: {
      main: "#ff0000"
    }
  }
});

export default theme;