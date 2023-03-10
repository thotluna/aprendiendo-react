import { Square } from '../Square'

import styles from './Game.module.css'

export function Game ({ board, updateBoard }) {
  return (
    <section className={styles.game}>
      {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                onClick={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
    </section>
  )
}
