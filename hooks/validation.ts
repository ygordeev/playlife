import { errorMessages } from '@/constants'
import { ValidatorType } from '@/types'

export const useValidationRules = (validators: ValidatorType[]) => {
  const rules = validators?.reduce((acc, validator) => {
    acc[validator] = errorMessages[validator]
    return acc
  }, {} as Record<ValidatorType, string>)

  return { rules }
}
