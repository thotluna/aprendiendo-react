import Board from './components/Board'
import { StartModel } from './components/StartModal'
import { usePlay } from './hooks/usePlay'
import { usePlayers } from './hooks/usePlayers'

function App () {
  const { play, startPlay } = usePlay()
  const { players, handlerPlayers } = usePlayers()
  return (
    <>
      {
        !play && <StartModel
          players={players}
          onPlayers={handlerPlayers}
          setPlay={startPlay}
                 />
      }
      {play && <Board players={players} />}
    </>
  )
}

export default App
