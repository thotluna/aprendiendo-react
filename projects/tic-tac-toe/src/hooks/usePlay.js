import { useContext } from 'react'
import { PlayContext } from '../contexts/play'
import { resetPlayStorage, savePlayStorage } from '../logic/storage'

export function usePlay () {
  const { play, setPlay } = useContext(PlayContext)

  const startPlay = () => {
    savePlayStorage()
    setPlay(true)
  }

  const restartPlay = () => {
    resetPlayStorage()
    setPlay(false)
  }

  return { play, startPlay, restartPlay }
}
