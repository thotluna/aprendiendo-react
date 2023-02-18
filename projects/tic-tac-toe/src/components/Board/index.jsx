import { useEffect, useState } from 'react'
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
import { useBoard } from '../../hooks/useBoard'

export default function Board ({ players }) {
  const { restartPlay } = usePlay()
  const { board, resetBoard, updateBoard } = useBoard()

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    // setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    restartPlay()

    resetBoard()
    resetGameStorage()
  }

  const playComputer = () => {
    let index
    do {
      index = Math.trunc(Math.random() * board.length)
    } while (board[index] !== null)

    move(index)
  }

  useEffect(() => {
    if (!players.includes(turn) && winner === null) {
      playComputer()
    }
  }, [turn])

  const move = (index) => {
    if (board[index] || winner) return
    const newBoard = updateBoard(index, turn)

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
      <Game board={board} updateBoard={move} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
      <Footer>
        {players}
      </Footer>
    </main>
  )
}
