import { openDB } from 'idb'

const DB_NAME = 'QuizPlatformApp'
const DB_VERSION = 1
const STORE_NAME = 'quizData'

export async function getDB() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME)
      }
    },
  })
}

// TODO: update UNKNOWN type here
export async function setItem(key: string, value: unknown) {
  const db = await getDB()
  await db.put(STORE_NAME, value, key)
}

export async function getItem<T>(key: string): Promise<T | undefined> {
  const db = await getDB()
  return db.get(STORE_NAME, key)
}

export async function removeItem(key: string) {
  const db = await getDB()
  await db.delete(STORE_NAME, key)
}
