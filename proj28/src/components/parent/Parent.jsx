import React from 'react'
import './Parent.css'
import Child from '../child/Child'

function Parent() {
  return (
    <div className='par_box'>
        <h1>Parent </h1>

        <Child/>
    </div>
  )
}

export default Parent