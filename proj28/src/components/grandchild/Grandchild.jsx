import React from 'react'
import './Grandchild.css'

import context from '../../app.js'
import { useContext } from 'react'
function Grandchild() {

  let data = useContext(context);
  return (
    <div className='gchl_box'>

        <h1>Grandchild {data}</h1>
    </div>
  )
}

export default Grandchild