import { useEffect } from 'react'

import { usePlay } from './usePlay.js'
import { useBoard } from './useBoard.js'
import { useTurn } from './useTurn.js'

import confetti from 'canvas-confetti'
import { useScore } from './useScore.js'

export function useGame ({ players }) {
  const { restartPlay } = usePlay()
  const { score, updateScore, resetScore, setValue } = useScore()
  const { board, winner, resetBoard, updateBoard, hasBoardFull } = useBoard()
  const { turn, changeTurn, resetTurn } = useTurn()

  const resetGame = () => {
    restartPlay()
    resetBoard()
    resetTurn()
    setValue(false)
  }

  const resetAll = () => {
    resetScore()
    resetGame()
  }

  const playComputer = () => {
    let index
    do {
      index = Math.trunc(Math.random() * board.length)
    } while (board[index] !== null)

    move(index)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!players.includes(turn) && winner === null && !hasBoardFull()) {
        playComputer()
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [turn])

  useEffect(() => {
    if (winner) {
      confetti()
      updateScore(winner)
    }
  }, [winner])

  const move = (index) => {
    if (board[index] || winner) return
    updateBoard(index, turn)
    changeTurn()
  }

  return { board, turn, winner, score, resetGame, resetAll, move }
}
