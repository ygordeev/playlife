import { useController, FieldValues } from 'react-hook-form'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'
import { useValidationRules } from '@/hooks'
import { ControllerFieldProps } from '@/types'

const TextField = <T extends FieldValues>(props: ControllerFieldProps<T> & MuiTextFieldProps) => {
  const { control, name, validators = [], errorMessage, ...inputProps } = props

  const { rules } = useValidationRules(validators || [])
  const { field } = useController({ name, control, rules })

  return (
    <MuiTextField
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      {...inputProps}
      {...field}
    />
  )
}

export default TextField
