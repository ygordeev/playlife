import { useState } from 'react';
import { SketchPicker } from 'react-color';
import Stack from '@mui/material/Stack'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover';
import { AchievementColorPickerProps } from '@/types'
import { achievementColorPickerOptions } from './constants'

const ColorPickerIcon = ({ color, ...boxProps }: { color: string } & BoxProps) => (
  <Box
    width={15}
    height={15}
    bgcolor={color}
    border={2}
    borderColor="common.white"
    {...boxProps}
  />
)

const AchievementColorPicker = (props: AchievementColorPickerProps) => {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLButtonElement | null>(null)

  const isPopoverOpen = Boolean(popoverAnchor)
  const popoverId = isPopoverOpen ? 'color-picker-popover' : undefined

  return (
    <>
      <Stack direction="row" spacing={1}>
        {achievementColorPickerOptions.map(option => (
          <Button
            key={option.name}
            variant="contained"
            aria-describedby={popoverId}
            endIcon={<ColorPickerIcon color={props[option.name]} />}
            onClick={e => setPopoverAnchor(e.currentTarget)}
            sx={{ flexGrow: 1 }}
          >
            {option.label}
          </Button>
        ))}
      </Stack>

      <Popover
        id={popoverId}
        open={isPopoverOpen}
        anchorEl={popoverAnchor}
        onClose={() => setPopoverAnchor(null)}
        anchorOrigin={{
          vertical: -4,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <SketchPicker />
      </Popover>
    </>
  )
}

export default AchievementColorPicker