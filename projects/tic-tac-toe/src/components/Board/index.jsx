import { WinnerModal } from '../WinnerModal'
import { TurnDisplay } from '../TurnDisplay'
import { Game } from '../Game'
import { Footer } from '../Footer'
import Button from '../Button'

import { useGame } from '../../hooks/useGame.js'

import styles from './Board.module.css'

export default function Board ({ players }) {
  const { board, turn, winner, resetGame, move } = useGame({ players })
  return (
    <main className={styles.board}>
      <h1>Tic tac toe</h1>
      <Button onClick={resetGame}>Reset del juego</Button>
      <Game board={board} updateBoard={move} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
      <Footer>
        {turn}
      </Footer>
    </main>
  )
}
