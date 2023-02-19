import React from 'react'
import { TURNS } from '../../constants'
import { useScore } from '../../hooks/useScore'
import { Square } from '../Square'

import styles from './Score.module.css'

export function Score () {
  const { score } = useScore()
  return (
    <div className={styles.content}>
      <div className={styles['player-x']}>
        <Square min>{TURNS.X}</Square>
        <Square min>{score[TURNS.X]}</Square>
      </div>
      <div className={styles['player-o']}>
        <Square min>{TURNS.O}</Square>
        <Square min>{score[TURNS.O]}</Square>
      </div>
    </div>
  )
}
