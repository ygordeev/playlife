import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlayLife</title>
        <meta name="description" content="Task management system designed to gamify your daily routine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hello world</p>
      </main>
    </div>
  )
}

export default Home
