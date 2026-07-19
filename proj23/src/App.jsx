import {useState} from 'react'
import './App.css'
import Categories from './components/categories/Categories.jsx';
import Records from './components/records/Records.jsx';
import { useEffect } from 'react';
import { fetchRecords } from './app.js';

function App() {
  let [recs,setRecs] = useState([]);
  let [xrecs,setxRecs] = useState([]);
  let [selCat, setSelCat] = useState('');

  useEffect(() => {
    setxRecs(recs.filter((next)=> next.category == selCat));
  },[selCat])

  useEffect(()=>{
    fetchRecords(setRecs,setxRecs);
  },[])
  return(
    <div>
      <Categories selCatFunc={setSelCat} />
      <Records recs={xrecs}/>
    </div>
  );
}

export default App
