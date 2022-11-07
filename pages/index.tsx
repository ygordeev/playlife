import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';

const LandingBackgroundStyle = {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'cyan',
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlayLife</title>
      </Head>

      <Box sx={LandingBackgroundStyle} />
    </>
  )
}

export default Home
