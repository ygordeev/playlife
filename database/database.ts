import Dexie, { Dexie as DexieType } from 'dexie'
import { tasks, achievements } from '@/constants'

export class Database {
  db: DexieType
  isInitialized: boolean = false

  constructor(dbName: string) {
    this.db = new Dexie(dbName)
    this.isInitialized = true

    this.db.version(1).stores({
      tasks: '++id,status,name,dueDate,complexity',
      achievements: '++id,description,dateAchieved',
    })

    this.db.table('tasks').bulkPut(tasks)
    this.db.table('achievements').bulkPut(achievements)
  }
  
  getTasks = async () => {
    return await this.db.table('tasks').toArray()
  }
  getAchievements = async () => {
    return await this.db.table('achievements').toArray()
  }
}