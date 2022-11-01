import type { NextPage } from 'next'
import Head from 'next/head'
import { LandingBackground } from '@/components/landing';
import { GlobalStyles } from '@/styles';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlayLife</title>
        <meta name="description" content="Task management system designed to gamify your daily routine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <LandingBackground />
    </div>
  )
}

export default Home
