import { createSlice } from '@reduxjs/toolkit'
import { user } from '@/constants'
import { User } from '@/types'
import { RootState } from './index'

/**
 * Once the actual backend is properly set up, all user data
 * will be fetched via API. For now it's temporarily mocked.
 * 
 * Yan Gordeev, 12/02/2022
 */

type AuthState = {
  user: User | null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user,
  } as AuthState,
  reducers: {},
})

export const authSelectors = {
  user: (state: RootState) => state.auth.user,
}

export const statisticsActions = authSlice.actions

export default authSlice.reducer
