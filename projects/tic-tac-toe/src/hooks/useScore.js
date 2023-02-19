import { useContext } from 'react'
import { INITIAL_SCORE } from '../constants.js'
import { ScoreContext } from '../contexts/scoreContext.jsx'
import { resetScoreStorage, saveScoreStorage } from '../logic/storage/index.js'

export function useScore () {
  const { score, setScore, isValued, setValue } = useContext(ScoreContext)

  const updateScore = (winner) => {
    if (isValued) return
    setScore(score => {
      const newScore = { ...score }
      newScore[winner] = score[winner] + 1
      saveScoreStorage(newScore)
      setValue(true)
      return newScore
    })
  }

  const resetScore = () => {
    resetScoreStorage()
    setScore(INITIAL_SCORE())
  }

  return { score, updateScore, resetScore, setValue }
}
