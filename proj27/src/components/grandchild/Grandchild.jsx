import React from 'react'
import './Grandchild.css'
function Grandchild({name}) {
  return (
    <div className='gchl_box'>
        <h1>Grandchild -- {name} </h1>
    </div>
  )
}

export default Grandchild