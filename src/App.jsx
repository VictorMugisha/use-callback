import { useCallback, useState } from 'react'
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

  function shuffle(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const handleSearch = useCallback((text) => {
    console.log(users[0])
    const filteredUsers = allUsers.filter(user => user.includes(text))
    setUsers(filteredUsers)
  }, [users])
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
