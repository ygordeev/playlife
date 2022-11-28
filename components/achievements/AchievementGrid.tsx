import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Grid from '@mui/material/Grid'
import { AchievementDialog } from '@/components/dialogs'
import { selectAchievements, achievementsActions } from '@/store/achievements'
import { useDispatch } from '@/hooks'
import { Achievement } from '@/types'
import NewAchievementButton from './NewAchievementButton'
import AchievementCard from './AchievementCard'

const AchievementGrid = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement>()
  const [isAchievementDialogOpen, setIsAchievementDialogOpen] = useState(false)

  const achievements = useSelector(selectAchievements)
  const dispatch = useDispatch()

  const selectAchievement = (achievement: Achievement) => {
    setIsAchievementDialogOpen(true)
    setSelectedAchievement(achievement)
  }

  const closeAchievementDialog = () => {
    setIsAchievementDialogOpen(false)
    setSelectedAchievement(undefined)
  }

  const updateAchievement = (achievement: Achievement) => {
    if (achievement.id) {
      dispatch(achievementsActions.updateAchievement(achievement))
    } else {
      dispatch(achievementsActions.createAchievement(achievement))
    }
    
    closeAchievementDialog()
    toast.success('Achievement was successfully updated')
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