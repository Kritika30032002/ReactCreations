import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorGrid from './ColorGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="colorgrid">
        <ColorGrid />
      </div>
    </>
  )
}

export default App
