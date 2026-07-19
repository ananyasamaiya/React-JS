import { useState , useEffect} from 'react'

import './App.css'
import { showData } from './app';
import Cards from './components/cards/Cards';

function App() {
  let [data,setData] = useState([]);

  useEffect(() =>{
    showData(setData);
  },[]);

  return(
    <div>
      
        <Cards records={data} />
    </div>
  );
}

export default App
