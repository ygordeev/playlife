import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { capitalize } from '@/utils'

interface ComplexityIndicatorProps {
  complexity: 'hard' | 'medium' | 'easy'
}

const complexityColors = {
  hard: 'error.light',
  medium: 'warning.light',
  easy: 'success.light',
}

const ComplexityIndicator = ({ complexity }: ComplexityIndicatorProps) => {
  const indicatorColor = complexityColors[complexity]

  return (
    <Box
      border={1}
      borderColor={indicatorColor}
      borderRadius={1}
      color={indicatorColor}
      px={0.5}
    >
      <Typography variant="subtitle2">
        {capitalize(complexity)}
      </Typography>
    </Box>
  )
}

export default ComplexityIndicator