import { Control, FieldPath, FieldValues, UseControllerProps } from 'react-hook-form'
import { errorMessages } from '@/constants'
import { ValidatorType } from './validation'

export interface ControllerFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  name: FieldPath<T>,
  control: Control<T>,
  validators?: ValidatorType[],
  errorMessage?: string,
}
