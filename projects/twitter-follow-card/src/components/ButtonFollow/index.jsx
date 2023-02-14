import { useState } from 'react'
import classNames from 'classnames'

import styles from './button-follow.module.css'

export function ButtonFollow ({ isFollowing, onToggle }) {
  const [up, setUp] = useState(false)
  const styleFollow = isFollowing ? styles.following : styles.follow
  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const handlerMouseOver = (e) => {
    e.stopPropagation()
    setUp(true)
  }

  const handlerMouseOut = (e) => {
    e.stopPropagation()
    setUp(false)
  }

  return (
    <button
      onMouseOver={handlerMouseOver}
      onMouseOut={handlerMouseOut}
      onClick={onToggle}
      className={classNames(styles.btn, styleFollow)}
    >
      {
        isFollowing && up
          ? <span>Dejar de seguir</span>
          : <span>{text}</span>

      }
    </button>
  )
}
