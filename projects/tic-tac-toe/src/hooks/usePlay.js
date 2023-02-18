import { useState } from 'react'
import { getPlayStorage, resetPlayStorage, savePlayStorage } from '../logic/storage'

export function usePlay () {
  const [play, setPLay] = useState(() => getPlayStorage() || false)

  const startPlay = () => {
    savePlayStorage()
    setPLay(true)
  }

  const restartPlay = () => {
    resetPlayStorage()
    setPLay(false)
  }

  return { play, startPlay, restartPlay }
}
