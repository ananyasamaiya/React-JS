import { useEffect, useState } from 'react';
import Categories from './components/categories/Categories.jsx'
import Records from './components/records/records.jsx';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';
function App(){
  let [cat,setCat] = useState('All');
  let [recs,setRecs] = useState([]);
  let [xrecs,xsetRecs] = useState([]);


  // useEffect(()=>{

  // },[cat]);



  useEffect(()=>{
    if(cat == 'All'){
      axios.get(url)
    .then((obj)=>{
      setRecs(obj.data);
      xsetRecs(obj.data);
    })
    .catch((err) => {
      console.log(err);
    })
    }else{
      xsetRecs(recs.filter((next)=> next.category == cat ))
    }
  },[cat]);


  return (
    <div>
      <Categories func={setCat} />
      <Records recs={xrecs} />
    </div>
  )
}

export default App;