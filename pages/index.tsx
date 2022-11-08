import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        bgcolor="grey.900"
      >
        <Typography variant="h2" color="common.white">
          Landing Page
        </Typography>
      </Box>
    </>
  )
}

export default Home
