import Typography from '@mui/material/Typography'
import { getTextGradientStyle } from '@/utils'

type FontSizeType = number | string

const getHeadingStyle = (fontSize: FontSizeType) => ({
  display: 'inline',
  fontWeight: 'bold',
  lineHeight: fontSize,
  fontSize,
  ...getTextGradientStyle('90deg, #3cc758, #ca8919'),
})

const SiteLogo = ({ fontSize }: { fontSize: FontSizeType }) => {
  // This component is temporary. In the future either PNG or SVG will be used

  return (
    <Typography sx={getHeadingStyle(fontSize)}>PLAYLIFE</Typography>
  )
}

export default SiteLogo