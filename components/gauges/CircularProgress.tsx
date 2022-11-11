import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularGauge, { CircularProgressProps } from '@mui/material/CircularProgress'
import { useCountUp } from '@/hooks'

type GaugeProps = CircularProgressProps & {
  currentCount: number,
  totalCount: number,
}

const percentageTextStyle = {
  display: 'grid',
  placeItems: 'center',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

const CircularProgress = ({ currentCount, totalCount, ...props }: GaugeProps) => {
  const count = useCountUp(currentCount, 1)
  const percentage = Math.round(count / totalCount * 100)

  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      flexShrink={0}
    >
      <CircularGauge
        value={percentage}
        variant="determinate"
        {...props}
      />
      <Typography
        variant="caption"
        component="div"
        sx={percentageTextStyle}
      >
        {percentage}%
      </Typography>
    </Box>
  )
}

export default CircularProgress