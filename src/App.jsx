import { useState } from 'react'
import Search from './Search'
import './App.css'

const allUsers = [
  'John',
  'Alex',
  'George',
  'Simon',
  'James'
]

function App() {
  const [users, setUsers] = useState(allUsers)

  function handleSearch(text) {
    console.log(text)
    const filteredUsers = users.filter(user => user.includes(text))
    setUsers(filteredUsers)
  }
  return (
    <div className="container">
      <div className="content">
        <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {
          users.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
