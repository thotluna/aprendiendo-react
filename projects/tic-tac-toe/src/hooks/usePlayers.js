import { useState } from 'react'

export function usePlayers () {
  const [players, setPlayers] = useState([])

  const handlerPlayers = (player) => {
    const playersSave = players.includes(player)
      ? players.filter(value => value !== player)
      : [...players, player]
    setPlayers(playersSave)
  }
  return { players, setPlayers, handlerPlayers }
}
