import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface DropdownOption {
  value: string,
  label: string,
}

interface DropdownProps {
  value: string | null,
  label: string,
  onChange: (value: string) => void,
  options: DropdownOption[],
}

const Dropdown = (props: DropdownProps) => {
  const { value, onChange, options, label } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <TextField
      value={value}
      onChange={handleChange}
      label={label}
      select
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default Dropdown