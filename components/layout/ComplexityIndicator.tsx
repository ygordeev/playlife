import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { capitalize } from '@/utils'
import { Complexity } from '@/types'

type ComplexityType = `${Complexity}`

interface ComplexityIndicatorProps {
  complexity: ComplexityType
}

const complexityColors: Record<ComplexityType, string> = {
  easy: 'success.light',
  medium: 'warning.light',
  hard: 'error.light',
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
