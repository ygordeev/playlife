export enum EndpointPaths {
  Tasks = '/tasks',
  Task = '/task',
  Achievements = '/achievements',
  Achievement = '/achievement',
  RecentStatistics = '/statistics/recent',
}

export enum StatisticsTableTypes {
  CompletedTasks = 'completedTasks'
}

export interface StatisticsTableEntry<T = any> {
  date: string,
  type: StatisticsTableTypes,
  value: T
}

export interface RecentStatisticsRequest {
  type: StatisticsTableTypes,
  count?: number
}
