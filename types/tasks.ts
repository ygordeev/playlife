import { Complexity } from './enums';

export interface Goal {
  name: string,
  complexity: Complexity,
  progressInPercent: number,
  dueDate: string,
}
