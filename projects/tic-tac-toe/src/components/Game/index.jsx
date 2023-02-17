import { Square } from '../Square'

import styles from './Game.module.css'

export default function Game ({ board, updateBoard }) {
  return (
    <section className={styles.game}>
      {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
    </section>
  )
}
