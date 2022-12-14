import { memo } from 'react'
import { useController, FieldValues } from 'react-hook-form'
import EmojiPicker, {
  Theme as EmojiPickerTheme,
  Props as EmojiPickerProps,
} from 'emoji-picker-react'
import Typography from '@mui/material/Typography'
import { useValidationRules } from '@/hooks'
import { ControllerFieldProps } from '@/types'

const CustomEmojiPicker = <T extends FieldValues>(props: ControllerFieldProps<T> & EmojiPickerProps) => {
  const { control, name, validators, errorMessage } = props  

  const { rules } = useValidationRules(validators || [])
  const { field } = useController({ name, control, rules })

  return (
    <>
      <EmojiPicker
        width="100%"
        lazyLoadEmojis
        theme={EmojiPickerTheme.DARK}
        onEmojiClick={e => field.onChange(e.emoji)}
      />
      <Typography color="error">{errorMessage}</Typography>
    </>
  )
}

const MemoizedEmojiPicker = memo(CustomEmojiPicker) as typeof CustomEmojiPicker

export default MemoizedEmojiPicker
