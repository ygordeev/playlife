import { useDispatch as useReduxDispatch } from 'react-redux'
import type { RootDispatch } from '@/store'

export const useDispatch: () => RootDispatch = useReduxDispatch
