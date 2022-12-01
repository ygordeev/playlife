import Dexie, { Dexie as DexieType } from 'dexie'
import { tasks, achievements } from '@/constants'
import { Task, Achievement, TaskStatus } from '@/types'
import { getStatisticsIdentifier } from './utils'
import { StatisticsTableEntry } from './types'

export class Database {
  db: DexieType

  constructor(dbName: string) {
    this.db = new Dexie(dbName)

    this.db.version(2).stores({
      tasks: '++id,status,name,dueDate,complexity',
      achievements: '++id,description,dateAchieved',
      statistics: '++id,date,type,[date+type]',
    })

    this.db.on('populate', trans => {
      trans.table('tasks').bulkPut(tasks)
      trans.table('achievements').bulkPut(achievements)
    })

    const initializeStatistics = async () => {
      if (typeof window === 'undefined') return
      const identifier = getStatisticsIdentifier('completedTasks')
      const statisticsTable = await this.db.table('statistics').get(identifier)
      if (!statisticsTable) this.db.table('statistics').add(identifier)
    }
    initializeStatistics()
  }
  
  getTasks = async () => {
    return await this.db.table('tasks').toArray() as Task[]
  }
  getAchievements = async () => {
    return await this.db.table('achievements').toArray() as Achievement[]
  }
  createTask = async (task: Task) => {
    await this.db.table('tasks').add(task)
    return await this.getTasks()
  }
  updateTask = async (task: Task) => {
    if (task.status === TaskStatus.Completed) this.updateCompletedTasks(task)

    await this.db.table('tasks').put(task)
    return await this.getTasks()
  }
  createAchievement = async (achievement: Achievement) => {
    await this.db.table('achievements').add(achievement)
    return await this.getAchievements()
  }
  updateAchievement = async (achievement: Achievement) => {
    await this.db.table('achievements').put(achievement)
    return await this.getAchievements()
  }
  updateCompletedTasks = async (task: Task) => {
    const identifier = getStatisticsIdentifier('completedTasks')
    const completedTasks = await this.db.table('statistics').get(identifier) as StatisticsTableEntry

    const currentValues = completedTasks.value || []
    const updatedValues = [...new Set([...currentValues, task.id])]
    await this.db.table('statistics').update(completedTasks.id, {
      value: updatedValues,
    })
  }
}
