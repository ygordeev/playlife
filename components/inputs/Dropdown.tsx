import { Controller, FieldValues } from 'react-hook-form'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useValidationRules } from '@/hooks'
import { ControllerFieldProps } from '@/types'

interface DropdownOption {
  value: string,
  label: string,
}

type DropdownProps = TextFieldProps & {
  options: DropdownOption[],
}

const Dropdown = <T extends FieldValues>(props: ControllerFieldProps<T> & DropdownProps) => {
  const { control, name, validators, errorMessage, ...inputProps } = props

  const { rules } = useValidationRules(validators)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          {...inputProps}
          error={Boolean(errorMessage)}
          helperText={errorMessage}
          select
        >
          {inputProps.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

export default Dropdown