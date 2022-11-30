export enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

export interface StatisticsTableEntry {
  id?: number,
  date: string,
  type: 'completedTasks',
  value: number[]
}
