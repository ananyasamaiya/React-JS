import React from 'react'
import './Child'
import Grandchild from '../grandchild/Grandchild'
function Child({data}) {
  return (
    <div className='chl_box'>
        <h1>Child -- {data}</h1>

        <Grandchild name={data} />
    </div>
  )
}

export default Child