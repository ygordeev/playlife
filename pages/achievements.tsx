import Head from 'next/head'
import type { NextPage } from 'next'
import { PrimaryLayout } from '@/layouts'

const AchievementsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Achievements</title>
      </Head>

      <PrimaryLayout>
        <p>Achievements</p>
      </PrimaryLayout>
    </>
  )
}

export default AchievementsPage;
