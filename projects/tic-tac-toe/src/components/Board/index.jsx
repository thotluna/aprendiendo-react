import { Children, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { TURNS } from '../../constants'
import { checkWinnerFrom, checkEndGame } from '../../logic/board.js'
import { WinnerModal } from '../WinnerModal'
import { saveGameToStorage, resetGameStorage } from '../../logic/storage/index.js'
import TurnDisplay from '../TurnDisplay'
import Game from '../Game'
import Button from '../Button/index.jsx'

import styles from './Board.module.css'
import { usePlay } from '../../hooks/usePlay'
import Footer from '../Footer'

export default function Board ({ players }) {
  const { restartPlay } = usePlay()
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    restartPlay()

    resetGameStorage()
  }

  const playComputer = () => {
    let index
    do {
      index = Math.trunc(Math.random() * board.length)
    } while (board[index] !== null)

    updateBoard(index)
  }

  useEffect(() => {
    if (!players.includes(turn) && winner === null) {
      playComputer()
    }
  }, [turn])

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      return
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
      return
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
  }
  return (
    <main className={styles.board}>
      <h1>Tic tac toe</h1>
      <Button onClick={resetGame}>Reset del juego</Button>
      <Game board={board} updateBoard={updateBoard} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
      <Footer>
        {players}
      </Footer>
    </main>
  )
}
