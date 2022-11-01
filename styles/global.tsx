import { Global, css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const GlobalStyles = () => <Global styles={globalStyle} />
