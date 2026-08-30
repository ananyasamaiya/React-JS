import {useReducer} from 'react';
import reducerFunc from './app.js';
function App() {
  let [state,dispatch] = useReducer(reducerFunc,1);

  return (
    <div>
      <h1>State Data: {state}</h1>
      <button onClick={()=>dispatch({type: 'Increment'})}>Increment State</button>
      <button onClick={()=>dispatch({type: 'Decrement'})}>Decrement State</button>
      <button onClick={dispatch}>Reset State</button>

    </div>
  )
}

export default App
