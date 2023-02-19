import { useState } from 'react'
import { getPlayStorage, resetPlayersStorage, savePlayersStorage } from '../logic/storage'

export function usePlayers () {
  const [players, setPlayers] = useState(() => getPlayStorage() || [])

  const handlerPlayers = (player) => {
    const playersSave = players.includes(player)
      ? players.filter(value => value !== player)
      : [...players, player]
    savePlayersStorage(playersSave)
    setPlayers(playersSave)
  }

  const resetPlayers = () => {
    resetPlayersStorage()
    setPlayers([])
  }
  return { players, setPlayers, handlerPlayers, resetPlayers }
}
