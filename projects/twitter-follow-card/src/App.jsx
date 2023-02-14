import { useState } from 'react'
import { TwitterFollowCard } from './components/TwitterFollowCard'
import { getUsers } from './services/users.js'
import './App.css'

export function App () {
  const [users] = useState(() => getUsers())

  return (
    <section>
      <h2>A quién seguir</h2>
      <ul>
        {
          users.map((user) => {
            return (
              <li key={user.id}>
                <TwitterFollowCard userInitialized={user} />
              </li>
            )
          })
        }
      </ul>
      <a>Mostrar mas</a>
    </section>
  )
}
