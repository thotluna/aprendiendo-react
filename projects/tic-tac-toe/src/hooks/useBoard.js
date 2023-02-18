import { useState } from 'react'
import { getBoardStorage, resetBoardStorage } from '../logic/storage'

export function useBoard () {
  const [board, setBoard] = useState(() => {
    return JSON.parse(getBoardStorage()) ?? Array(9).fill(null)
  })

  const resetBoard = () => {
    resetBoardStorage()
    setBoard(Array(9).fill(null))
  }

  const updateBoard = (index, value) => {
    const newBoard = [...board]
    newBoard[index] = value
    setBoard(newBoard)
    return newBoard
  }

  return { board, setBoard, resetBoard, updateBoard }
}
