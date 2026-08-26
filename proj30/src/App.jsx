import { useState,useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let normalVar = 1;
  let [state,setState] = useState(100);
  let obj = useRef(1000);  //obj:{current:undefined/or argument passed}
  // useref use 1 properties of both normal, state
  //normal variable property use is do not reflect in UI
  //state variable property use preserve after re-render


  function incrementNormVar() {
    normalVar++;
  }

  function incrementState() {
    setState(state + 1);
    
  }

  function incrementRefVar() {
    obj.current += 1;
  }

  function showValue() {
    console.log('Normal Variable Value:', normalVar);
    console.log('State Variable Value:', state);
    console.log('Ref Variable Value:', obj.current);
  }

  return (
    <div className="var_box">
      <h2>Variable Demo</h2>
      <hr />

      <h3>Normal Variable: {normalVar}</h3>
      <h3>State Variable: {state}</h3>
      <h3>Ref Variable: {obj.current}</h3>

      <button onClick={incrementNormVar}>Increment Variable</button>
      <button onClick={incrementState}>Increment State Variable</button>
      <button onClick={incrementRefVar}>Increment Ref Variable</button>
      <button onClick={showValue}>Display Value</button>
    </div>
  )
}

export default App
