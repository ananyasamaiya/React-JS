import { useState } from 'react'
import './App.css'
import context from './app.js'
import Container from './components/container/Container'
import Navbar from './components/navbar/Navbar'

function App() {
  let [isLoggedIn,setIsLoggedIn] = useState(false)

  function signin(){
    setIsLoggedIn(true);
  }
  function signout(){
    setIsLoggedIn(false);
  }
  return (
   <div>
    <context.Provider value={{isLoggedIn,signin, signout}}>
      {isLoggedIn ? <Navbar /> : null}
      <Container />

    </context.Provider>
   </div>
  )
}

export default App
