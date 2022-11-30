import Dexie, { Dexie as DexieType } from 'dexie'
import { tasks, achievements } from '@/constants'
import { Task, Achievement } from '@/types'

export class Database {
  db: DexieType

  constructor(dbName: string) {
    this.db = new Dexie(dbName)

    this.db.version(2).stores({
      tasks: '++id,status,name,dueDate,complexity',
      achievements: '++id,description,dateAchieved',
    })

    this.db.on('populate', trans => {
      trans.table('tasks').bulkPut(tasks)
      trans.table('achievements').bulkPut(achievements)
    })
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
}
