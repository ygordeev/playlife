import CssBaseline from '@mui/material/CssBaseline';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

const globalStyles = {
  '*': {
    /**
     * Manually overriding margins and paddings since CssBaseline styles 
     * inherited from body are overwritten by MUI component styles
    */
    margin: 0,
    padding: 0,
  },
  a: {
    cursor: 'pointer',
  }
}

export const GlobalStyles = () => {
  return (
    <>
      <CssBaseline />
      <MuiGlobalStyles styles={globalStyles} />
    </>
  )
}