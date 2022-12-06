import { positionBuffer } from '@/constants'
import { Task } from '@/types'

export const getNewTaskPosition = (position: number, siblings: Task[], isSameStatus: boolean) => {
  const siblingsLength = isSameStatus ? siblings.length - 1 : siblings.length
  if (siblingsLength === 0) return positionBuffer

  const edgePosition = position === 0 ? 'top' : (position === siblingsLength ? 'bottom' : null)

  switch (edgePosition) {
    case 'top': return siblings[0].position / 2
    case 'bottom': return (siblings.at(-1)?.position || 0) + positionBuffer
    default:
      const prevPosition = isSameStatus ? siblings[position] : siblings[position - 1]
      const nextPosition = isSameStatus ? siblings[position + 1] : siblings[position]
      return (prevPosition.position + nextPosition.position) / 2
  }
}
