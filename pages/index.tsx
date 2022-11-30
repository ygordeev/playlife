import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box'
import { LandingDisclaimer } from '@/components/landing'

const landingContainerStyle = {
  backgroundImage: `url(./images/landing-background.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PlayLife</title>
      </Head>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={landingContainerStyle}
      >
        <LandingDisclaimer />
      </Box>
    </>
  )
}

export default Home
