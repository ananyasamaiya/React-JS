import { useState } from 'react'

import './App.css'
import Parent from './components/parent/Parent'

function App() {
  let data = 'Yamraj';
  return (
    <div>
      <h1>App --</h1>

      <Parent info={data}  />
    </div>
  )
}

export default App
