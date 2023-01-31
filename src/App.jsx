import { useState } from 'react'
import './App.css'
import Color from './components/Color'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex justify-center'>
      <Color/>
    </div>
  )
}

export default App
