import { useState } from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import { AchievementDialog } from '@/components/dialogs'
import { achievementsSelectors } from '@/store/achievements'
import { Achievement } from '@/types'
import NewAchievementButton from './NewAchievementButton'
import AchievementCard from './AchievementCard'
import AchievementGridSkeleton from './AchievementGridSkeleton'

const AchievementGrid = () => {
  const achievements = useSelector(achievementsSelectors.achievements)
  const achievementsReceived = useSelector(achievementsSelectors.achievementsReceived)

  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>()
  const [isAchievementDialogOpen, setIsAchievementDialogOpen] = useState(false)

  const selectAchievement = (achievement: Achievement) => {
    setIsAchievementDialogOpen(true)
    setSelectedAchievement(achievement)
  }

  const closeAchievementDialog = () => {
    setIsAchievementDialogOpen(false)
    setSelectedAchievement(undefined)
  }

  return (
    <>
      <Grid container spacing={2}>
        {achievementsReceived ? (
          <>
            <Grid item>
              <NewAchievementButton onClick={() => setIsAchievementDialogOpen(true)} />
            </Grid>
            {achievements.map(achievement => (
              <Grid key={achievement.id} item>
                <AchievementCard
                  achievement={achievement}
                  onClick={() => selectAchievement(achievement)}
                />
              </Grid>
            ))}
          </>
        ) : <AchievementGridSkeleton />}
      </Grid>

      {isAchievementDialogOpen && (
        <AchievementDialog
          achievement={selectedAchievement}
          onClose={closeAchievementDialog}
        />
      )}
    </>
  )
}

export default AchievementGrid
