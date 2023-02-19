import { useState } from 'react'
import { TURNS } from '../constants'
import { getTurnStorage, resetTurnStorage, saveTurnStorage } from '../logic/storage'

export function useTurn () {
  const [turn, setTurn] = useState(() => {
    return getTurnStorage() ?? TURNS.X
  })

  const changeTurn = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveTurnStorage(newTurn)
    return newTurn
  }

  const resetTurn = () => {
    resetTurnStorage()
    setTurn(TURNS.X)
  }

  return { turn, setTurn, changeTurn, resetTurn }
}
