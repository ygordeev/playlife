import { createTheme } from '@mui/material/styles'
import darkScrollbar from '@mui/material/darkScrollbar'
import common from '@mui/material/colors/common'
import type {} from '@mui/x-date-pickers/themeAugmentation'

declare module '@mui/material' {
  interface Color {
    dark?: string;
    extradark?: string;
  }
}

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    grey: {
      dark: '#1E1F25',
      extradark: '#15161A',
    },
    primary: {
      main: '#42A5F5',
    }
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
          backgroundColor: common.black,
        }
      },
    },
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
})

export default overridenTheme