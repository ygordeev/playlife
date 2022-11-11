import { createTheme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar'

declare module '@mui/material' {
  interface Color {
    dark?: string;
    extradark?: string;
  }
}

const customMuiTheme = createTheme({
  palette: {
    grey: {
      dark: '#1E1F25',
      extradark: '#15161A',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        div: darkScrollbar(),
      },
    },
  },
});

export default customMuiTheme