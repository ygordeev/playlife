import { positionBuffer } from '@/constants'
import { Task } from '@/types'

export const getNewTaskPosition = (position: number, siblings: Task[]) => {
  if (siblings.length === 0) return positionBuffer
  
  switch (position) {
    case 0: return siblings[0].position / 2
    case siblings.length:
      const lastSiblingPosition = siblings.at(-1)?.position || 0
      return lastSiblingPosition + positionBuffer
    default:
      const prevPosition = siblings[position - 1]
      const nextPosition = siblings[position]
      return (prevPosition.position + nextPosition.position) / 2
  }
}
