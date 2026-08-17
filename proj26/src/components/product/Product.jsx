import {useState,useEffect} from 'react'

import Categories from '../categories/Categories.jsx'
import Records from '../records/Records.jsx';

import axios from 'axios'

const url = 'https://fakestoreapi.com/products';

function Product() {
  
  let [cat,setCat] = useState('All');
  let [recs,setRecs] = useState([]);
  let [xrecs,xsetRecs] = useState([]);

  useEffect(()=>{
      if(cat == 'All') {
        axios.get(url).then((obj)=>{
            // console.log(obj.data);
            setRecs(obj.data);
            xsetRecs(obj.data);
        }).catch((err)=>{
            console.log(err);
        });
      } else {
        xsetRecs(recs.filter((next)=> next.category == cat))
      }
  },[cat]);

  return (
    <div>
      <Categories func={setCat} />
      <Records recs={xrecs} />
    </div>
  );
}

export default Product