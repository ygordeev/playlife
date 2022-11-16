import Head from 'next/head'
import type { NextPage } from 'next'
import { PrimaryLayout } from '@/layouts'

const PathsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learning Paths</title>
      </Head>

      <PrimaryLayout>
        <p>Learning Paths</p>
      </PrimaryLayout>
    </>
  )
}

export default PathsPage;
