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

// Style components are extracted to avoid re-rendering "style" tag
const GlobalStyleComponents = {
  Baseline: <CssBaseline />,
  GlobalStyles: <MuiGlobalStyles styles={globalStyles} />,
}

export const GlobalStyles = () => {
  return (
    <>
      {GlobalStyleComponents.Baseline}
      {GlobalStyleComponents.GlobalStyles}
    </>
  )
}