import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { AchievementDialog } from '@/components/dialogs'
import { Achievement } from '@/types'
import NewAchievementButton from './NewAchievementButton'
import AchievementCard from './AchievementCard'

// To-do: The achievement icons should be extracted from the store
import { achievements } from '@/constants'

const AchievementGrid = () => {
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

  const updateAchievement = (achievement: Achievement) => {
    console.log('Creating/updating achievement:', achievement)
  }

  return (
    <>
      <Grid container spacing={2}>
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
      </Grid>

      {isAchievementDialogOpen && (
        <AchievementDialog
          achievement={selectedAchievement}
          onClose={closeAchievementDialog}
          onSubmit={updateAchievement}
        />
      )}
    </>
  )
}

export default AchievementGrid