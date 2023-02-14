import { useState } from 'react'
import { ButtonFollow } from '../ButtonFollow'
import { TwitterCard } from '../TwitterCard'
import { Avatar } from '../Avatar'
import { DataUser } from '../DataUser'
import { WrapperRow } from '../WrapperRow'

import { useDebounceMouseOver } from '../../hooks/useDebounceMouseOver'

import styles from './twitter-follow-card.module.css'

export function TwitterFollowCard ({ userInitialized }) {
  const [user, setUser] = useState(userInitialized)
  const { userName, isFollowing } = user
  const [showCardUser, handlerMouseOver, handlerMouseOut] = useDebounceMouseOver()
  const [showCardUserChildren, handlerMouseOverChildren, handlerMouseOutChildren] = useDebounceMouseOver()

  const MouseOverHandler = () => {
    handlerMouseOverChildren()
    handlerMouseOut()
  }

  const handlerOnToggle = () => {
    setUser(prev => {
      return { ...prev, isFollowing: !prev.isFollowing }
    })
  }

  return (
    <WrapperRow className={styles.card} onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut}>
      <WrapperRow className={styles.avatar}>
        <Avatar userName={userName} />
        <DataUser user={user} />
      </WrapperRow>
      <ButtonFollow isFollowing={isFollowing} onToggle={handlerOnToggle} />
      {
        (showCardUser || showCardUserChildren) &&
          <TwitterCard
            user={user}
            onToggle={handlerOnToggle}
            handlerMouseOver={MouseOverHandler}
            handlerMouseOut={handlerMouseOutChildren}
          />
      }
    </WrapperRow>
  )
}
