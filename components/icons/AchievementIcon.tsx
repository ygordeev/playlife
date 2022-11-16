import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { achievementEmojiToIconRatio } from '@/constants'

interface AchievementIconProps {
  size: number,
  backgroundColor: string,
  borderColor: string,
  ribbonColor: string,
  emoji: string,
}

const iconContainerStyle = {
  cursor: 'pointer',
  transition: 'scale 0.3s',
  '&:hover': {
    scale: '1.1',
  }
}

const getEmojiStyle = (size: number) => ({
  position: 'absolute',
  top: '15%',
  left: '50%',
  translate: '-50%',
  fontSize: size * achievementEmojiToIconRatio
})

const AchievementIcon = (props: AchievementIconProps) => {
  return (
    <Box
      position="relative"
      width={props.size}
      flexShrink={0}
      sx={iconContainerStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="88.3 60.1 332.9 395.6"
      >
        <path fill="#CCC" d="m166 455.8-24.2-47.1-52.2-.6 100.1-160.6 76.5 47.7z" />
        <path fill={props.ribbonColor} d="M166.7 439.6 149 405l-2.2-4.3h-4.8l-38-.4 88.4-141.8 62.8 39.2-88.4 141.9z" />
        <path fill="#CCC" d="m343.2 455.4 23-47.7 52.1-2L314 248l-75 49.6z" />
        <path fill={props.ribbonColor} d="m342 439.2 17-35 2-4.3 4.9-.2 37.9-1.4L311.7 259l-61.8 40.8 92.2 139.4z" />
        <path fill={props.borderColor} d="M415.4 211.4a17.4 17.4 0 0 1 0 25.9 26.5 26.5 0 0 0-5.2 29.9 17.3 17.3 0 0 1-8.8 24.3c-9.7 4-16.6 15.8-15.2 26.2s-6.2 19.3-16.7 19.8c-10.4.5-20.9 9.3-23.2 19.5a17.3 17.3 0 0 1-22.4 13 26.6 26.6 0 0 0-28.5 10.4c-5.7 8.8-17.1 10.8-25.5 4.4s-22-6.3-30.3 0-19.8 4.4-25.5-4.4c-5.6-8.9-18.5-13.5-28.5-10.4s-20-2.7-22.4-13-12.7-19-23.2-19.5-18-9.4-16.6-19.8c1.3-10.4-5.5-22.2-15.2-26.2s-13.7-15-8.9-24.3 2.5-22.8-5.2-30a17.4 17.4 0 0 1 0-25.8c7.7-7.1 10-20.6 5.2-29.9s-.8-20.2 8.9-24.3c9.7-4 16.5-15.8 15.2-26.2s6.1-19.3 16.6-19.8 21-9.3 23.2-19.5 12.4-16.1 22.4-13c10 3.1 22.9-1.5 28.5-10.4s17.2-10.8 25.5-4.4 22 6.3 30.3 0c8.4-6.4 19.8-4.4 25.5 4.4S314 81.8 324 78.7c10-3.1 20.1 2.7 22.4 13s12.8 19 23.2 19.5c10.5.5 18 9.4 16.7 19.8s5.5 22.2 15.2 26.2a17.3 17.3 0 0 1 8.8 24.3 26.5 26.5 0 0 0 5.2 29.9z" />
        <path fill={props.backgroundColor} d="M285.4 362.2a8.4 8.4 0 0 1-12.3 2.2l-12.8-9.8a9.7 9.7 0 0 0-11 0l-12.9 9.8a8.4 8.4 0 0 1-12.3-2.2l-8.7-13.5a9.6 9.6 0 0 0-10.4-3.8l-15.4 4.8a8.4 8.4 0 0 1-10.8-6.3l-3.5-15.7c-.8-3.8-4.6-7-8.5-7.1l-16-.8c-5.2-.2-8.8-4.5-8.1-9.6l2-16c.5-3.8-2-8-5.5-9.5l-14.9-6.2a8.3 8.3 0 0 1-4.3-11.7l7.4-14.4a9.6 9.6 0 0 0-1.9-10.8l-11.8-11a8.4 8.4 0 0 1 0-12.5l11.8-11a9.6 9.6 0 0 0 2-10.8l-7.5-14.4a8.3 8.3 0 0 1 4.3-11.7l14.9-6.2c3.5-1.5 6-5.8 5.5-9.5l-2-16c-.7-5 3-9.4 8-9.6l16.1-.8a9.7 9.7 0 0 0 8.5-7l3.5-15.8c1.1-5 6-7.8 10.8-6.3l15.5 4.8a9.6 9.6 0 0 0 10.3-3.8l8.7-13.5a8.4 8.4 0 0 1 12.3-2.2l12.9 9.8a9.7 9.7 0 0 0 11 0l12.8-9.8c4-3 9.6-2 12.3 2.2l8.8 13.5a9.6 9.6 0 0 0 10.3 3.8L320 99a8.4 8.4 0 0 1 10.8 6.3l3.6 15.7c.8 3.7 4.6 7 8.4 7.1l16.1.8c5.1.3 8.7 4.5 8 9.5l-2 16c-.4 3.8 2 8.1 5.6 9.6l14.8 6.2a8.4 8.4 0 0 1 4.3 11.7l-7.4 14.4a9.7 9.7 0 0 0 2 10.8l11.8 11a8.4 8.4 0 0 1 0 12.5l-11.9 11a9.6 9.6 0 0 0-1.9 10.8l7.4 14.4a8.3 8.3 0 0 1-4.3 11.7l-14.8 6.2a9.7 9.7 0 0 0-5.6 9.5l2 16a8.4 8.4 0 0 1-8 9.6l-16.1.8a9.6 9.6 0 0 0-8.5 7l-3.5 15.8a8.4 8.4 0 0 1-10.8 6.3l-15.4-4.8a9.6 9.6 0 0 0-10.3 3.8l-8.8 13.5z" />
        <path fill={props.backgroundColor} d="M366.4 225.6a112.8 112.8 0 1 1-225.6 0 112.8 112.8 0 0 1 225.6 0z" />
      </svg>
      <Typography sx={getEmojiStyle(props.size)}>
        {props.emoji}
      </Typography>
    </Box>
  )
}

export default AchievementIcon