import { createContext, useState } from 'react'
import { INITIAL_SCORE } from '../constants'
import { getIsValuedScoreStorage, getScoreStorage } from '../logic/storage'

export const ScoreContext = createContext()

export function ScoreProvider ({ children }) {
  const [score, setScore] = useState(() => JSON.parse(getScoreStorage()) || INITIAL_SCORE())
  const [isValued, setValue] = useState(getIsValuedScoreStorage() || true)
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
      isValued,
      setValue
    }}
    >
      {children}
    </ScoreContext.Provider>
  )
}
