import { Complexity } from './enums';

export interface Goal {
  name: string,
  complexity: Complexity,
  finishedTasks: number,
  plannedTasks: number,
  dueDate: string,
}
