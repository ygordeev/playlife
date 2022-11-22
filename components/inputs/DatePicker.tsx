import { Controller, FieldValues, ControllerRenderProps } from 'react-hook-form'
import { DatePicker as XDatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import { useValidationRules } from '@/hooks'
import { getISODate } from '@/utils'
import { ControllerFieldProps } from '@/types'

const DatePicker = <T extends FieldValues>(props: ControllerFieldProps<T> & TextFieldProps) => {
  const { control, name, validators, errorMessage, ...textFieldProps } = props

  const { rules } = useValidationRules(validators)

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <XDatePicker
          {...field}
          onChange={date => field.onChange(getISODate(date))}
          renderInput={params => (
            <TextField
              {...params}
              {...textFieldProps}
              helperText={errorMessage}
              error={Boolean(errorMessage)}
              inputProps={{ ...params.inputProps, readOnly: true }}
            />
          )}
        />
      )}
    />
  )
}

export default DatePicker