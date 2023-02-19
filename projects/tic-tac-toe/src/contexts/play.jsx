import { createContext, useState } from 'react'
import { getPlayStorage } from '../logic/storage'

export const PlayContext = createContext()

export function PlayProvider ({ children }) {
  const [play, setPlay] = useState(() => getPlayStorage() || false)
  return (
    <PlayContext.Provider value={{
      play,
      setPlay
    }}
    >
      {children}
    </PlayContext.Provider>
  )
}
