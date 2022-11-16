import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { AchievementDialog } from '@/components/dialogs'
import { Achievement } from '@/types'
import NewAchievementButton from './NewAchievementButton'
import AchievementCard from './AchievementCard'

// To-do: The achievement icons should be extracted from the store
import { achievementIcons } from '@/constants'

const AchievementGrid = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [isAchievementDialogOpen, setIsAchievementDialogOpen] = useState(false)

  const selectAchievement = (achievement: Achievement) => {
    setIsAchievementDialogOpen(true)
    setSelectedAchievement(achievement)
  }

  const closeAchievementDialog = () => {
    setIsAchievementDialogOpen(false)
    setSelectedAchievement(null)
  }

  const updateAchievement = () => console.log('Achievement created/updated')

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <NewAchievementButton onClick={() => setIsAchievementDialogOpen(true)} />
        </Grid>

        {achievementIcons.map(achievement => (
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