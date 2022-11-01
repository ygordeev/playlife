/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardBackground } from '@/styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Dashboard</title>
      </Head>

      <DashboardBackground>
        Dashboard page
      </DashboardBackground>
    </>
  )
}

export default Home
