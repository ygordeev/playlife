import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@/styles'
import { customMuiTheme } from '@/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />

      <ThemeProvider theme={customMuiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
