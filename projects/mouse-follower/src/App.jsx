
import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handlerMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handlerMove)
      document.body.classList.toggle('no-cursor', enabled)
    }

    return () => {
      window.removeEventListener('pointermove', handlerMove)
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'transparent',
        border: '2px solid #f4c',
        borderRadius: '20px',
        opacity: '.4',
        pointerEvents: 'none',
        width: '40px',
        height: '40px',
        top: '-20px',
        left: '-20px',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnabled(prev => !prev)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}

function App () {
  return (
    <main className='App'>
      <FollowMouse />
    </main>
  )
}

export default App
