import React from 'react'
import './Parent.css'
import Child from '../child/Child'

function Parent({info}) {
  return (
    <div className='par_box'>
        <h1>Parent -- {info}</h1>

        <Child data={info}  />
    </div>
  )
}

export default Parent