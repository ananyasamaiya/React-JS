import { useState } from 'react'

import './App.css'
import { showData } from './app';
import Cards from './components/cards/Cards';

function App() {
  let [data,setData] = useState([]);
  return(
    <div>
        <button onClick={() => {showData(setData)}}>Show Users</button>
        <Cards records={data} />
    </div>
  );
}

export default App
