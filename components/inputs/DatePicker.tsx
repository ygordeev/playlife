import { forwardRef } from 'react'
import { DatePicker as XDatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

interface DatePickerProps {
  label: string,
  value?: string | null,
  onChange: (value: string | null) => void,
}

const DatePicker = forwardRef<HTMLElement, DatePickerProps>((props, ref) => {
  const { label, value, onChange } = props

  const handleChange = (date: Date | null) => {
    const isoString = date ? date.toISOString().substring(0, 10) : null
    onChange(isoString)
  }

  return (
    <XDatePicker
      label={label}
      value={value}
      onChange={handleChange}
      renderInput={params => {
        const inputProps = { ...params.inputProps, readOnly: true }
        const inputParams = { ...params, inputProps }
        return <TextField inputRef={ref} {...inputParams} />
      }}
    />
  )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker