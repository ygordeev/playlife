import { createTheme, Theme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar'
import { green, purple } from '@mui/material/colors';

declare module '@mui/material' {
  interface Color {
    dark?: string;
    extradark?: string;
  }
}

const customTheme = createTheme({
  palette: {
    grey: {
      dark: '#1E1F25',
      extradark: '#15161A',
    },
  },
});

const overridenTheme = createTheme(customTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: customTheme.palette.grey.dark,
          color: customTheme.palette.common.white,
        }
      },
    }
  },
})

export default overridenTheme