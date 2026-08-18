import React, { useContext } from 'react'
import Signin from '../signin/Signin'
import Dashboard from '../dashboard/Dashboard'
import context from '../../app';
function Container() {
    let {isLoggedIn} = useContext(context);
    let component = null;

    if(isLoggedIn){
        component = <Dashboard />
    }
    else{
        component = <Signin />
    }
  return (
    <div>
        {component}
    </div>
  )
}

export default Container