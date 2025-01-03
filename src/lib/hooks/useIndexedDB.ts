import { useEffect, useState } from 'react'
import { getItem, setItem } from '../database'

export default function useIndexedDB<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    async function loadValue() {
      try {
        const value = await getItem<T>(key)
        if (value !== undefined) {
          setStoredValue(value)
        }
      } catch (err) {
        console.error('Loading from IDB failed:', err)
      }
    }
    loadValue()
  }, [key])

  useEffect(() => {
    async function saveValue() {
      try {
        await setItem(key, storedValue)
      } catch (err) {
        console.error('Failed to save to IDB:', err)
      }
    }
    saveValue()
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
