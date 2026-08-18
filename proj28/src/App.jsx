import { useState } from 'react'
import context from './app.js';
import './App.css'
import Parent from './components/parent/Parent'

function App() {
  let [data,setData] = useState('Rakesh');
  return ( 
    <div>
      <h1>App --</h1>

      <hr />
      <hr />

      <button onClick={()=>{setData('Aman')}}>Change Data</button>
      <context.Provider value={data}>
      <Parent />
      </context.Provider>
    </div>
  )
}

export default App
