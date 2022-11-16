import Head from 'next/head'
import type { NextPage } from 'next'
import { PrimaryLayout } from '@/layouts'
import { AchievementGrid } from '@/components/achievements'

const AchievementsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Achievements</title>
      </Head>

      <PrimaryLayout>
        <AchievementGrid />
      </PrimaryLayout>
    </>
  )
}

export default AchievementsPage;
