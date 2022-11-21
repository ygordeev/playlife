import { Controller, FieldValues } from 'react-hook-form'
import { DatePicker as XDatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField';
import { useValidationRules } from '@/hooks'
import { ControllerFieldProps } from '@/types'

const DatePicker = <T extends FieldValues>(props: ControllerFieldProps<T> & TextFieldProps) => {
  const { control, name, validators, errorMessage, ...textFieldProps } = props

  const { rules } = useValidationRules(validators)

  const handleChange = (date: Date | null) => {
    // const isoString = date ? date.toISOString().substring(0, 10) : null
    // onChange(isoString)
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <XDatePicker
          {...field}
          renderInput={params => {
            const inputProps = { ...params.inputProps, readOnly: true }
            const inputParams = { ...params, ...textFieldProps, inputProps }
            return (
              <TextField
                {...inputParams}
                error={Boolean(errorMessage)}
                helperText={errorMessage}
              />
            )
          }}
        />
      )}
    />
  )
}

export default DatePicker