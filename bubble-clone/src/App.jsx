import { useState } from 'react'
import './App.css'
import Admin from './Components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Admin />
    </div>
  )
}

export default App
