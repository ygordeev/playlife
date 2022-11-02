import { GlobalStyles as MuiGlobalStyles } from '@mui/material';

const globalStyle = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const GlobalStyles = () => <MuiGlobalStyles styles={globalStyle} />
