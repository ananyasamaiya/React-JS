import React from 'react'
import './Child.css'
import Grandchild from '../grandchild/Grandchild'
import context from '../../app.js'
import { useContext } from 'react'
function Child() {

  let data = useContext(context);
  return (
    <div className='chl_box'>
        <h1>Child {data}</h1>

        <Grandchild  />
    </div>
  )
}

export default Child