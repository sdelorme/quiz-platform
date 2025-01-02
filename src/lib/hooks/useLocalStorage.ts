import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (err) {
        console.error(err)
        return initialValue
      }
    }
    return initialValue
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue))
      } catch (err) {
        console.error(err)
      }
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
