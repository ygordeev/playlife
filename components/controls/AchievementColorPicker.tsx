import { useState, useId } from 'react';
import { ChromePicker, ColorChangeHandler } from 'react-color';
import Stack from '@mui/material/Stack'
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import Popover from '@mui/material/Popover';
import { convertRgbToHex } from '@/utils'
import { AchievementColorPickerProps, AchievementColorType } from '@/types'
import { achievementColorPickerOptions } from './constants'

interface ColorPickerOnChangeType {
  onChange: (colorType: AchievementColorType, color: string) => void,
}

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

const AchievementColorPicker = (props: AchievementColorPickerProps & ColorPickerOnChangeType) => {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLButtonElement | null>(null)
  const [selectedColorType, setSelectedColorType] = useState<AchievementColorType>()
  const generatedPopoverId = useId()
  
  const isPopoverOpen = Boolean(popoverAnchor)
  const popoverId = isPopoverOpen ? generatedPopoverId : undefined

  const switchColorPicker = (anchor: HTMLButtonElement, colorType: AchievementColorType) => {
    setSelectedColorType(colorType)
    setPopoverAnchor(anchor)
  }
  
  const handleColorChange: ColorChangeHandler = color => {
    if (!selectedColorType) return

    const { r, g, b } = color.rgb
    const hexString = convertRgbToHex(r, g, b)
    props.onChange(selectedColorType, hexString)
  }

  return (
    <>
      <Stack direction="row" spacing={1}>
        {achievementColorPickerOptions.map(option => (
          <Button
            key={option.name}
            variant="contained"
            aria-describedby={popoverId}
            endIcon={<ColorPickerIcon color={props[option.name]} />}
            onClick={e => switchColorPicker(e.currentTarget, option.name)}
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
        <ChromePicker
          color={props.backgroundColor}
          disableAlpha
          onChange={handleColorChange}
        />
      </Popover>
    </>
  )
}

export default AchievementColorPicker