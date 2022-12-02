import { useEffect, useState, useRef } from 'react'
import { animate } from 'framer-motion'

export const useCountUp = (targetCount: number, duration: number, initialCount: number = 0) => {
  const [count, setCount] = useState(0)

  const initialValue = useRef(initialCount)

  useEffect(() => {
    const animation = animate(initialValue.current, targetCount, {
      duration,
      ease: 'linear',
      onUpdate(value) {
        setCount(Math.round(value))
      },
      onComplete() {
        initialValue.current = targetCount
      }
    })

    return () => animation.stop()
  }, [targetCount, duration, initialCount])

  return count
}
