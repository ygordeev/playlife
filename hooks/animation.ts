import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'

export const useCountUp = (targetCount: number, duration: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const animation = animate(0, targetCount, {
      duration,
      ease: 'linear',
      onUpdate(value) {
        setCount(Math.round(value))
      }
    })

    return () => animation.stop()
  }, [targetCount, duration])

  return count
}
