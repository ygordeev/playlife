import { createTheme } from '@mui/material/styles';

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
});

export default customMuiTheme