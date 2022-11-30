import { useEffect, ReactNode } from 'react'
import { toast } from 'react-toastify'
import Stack from '@mui/material/Stack'
import { tasksThunks } from '@/store/tasks'
import { achievementsThunks } from '@/store/achievements'
import { HeaderSection } from '@/components/header'
import { useDispatch } from '@/hooks'

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        Promise.all([
          dispatch(tasksThunks.fetchTasks()),
          dispatch(achievementsThunks.fetchAchievements()),
        ])
      } catch (e: unknown) {
        const error = e as Error
        toast.error(error.message)
      }
    }
    fetchInitialData()
  }, [dispatch])

  return (
    <Stack
      bgcolor="grey.extradark"
      height="100vh"
      overflow="hidden"
      spacing={5}
      px={5}
      py={2}
    >
      <HeaderSection />
      {children}
    </Stack>
  )
}

export default PrimaryLayout
