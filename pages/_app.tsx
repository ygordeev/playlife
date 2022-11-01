import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}
