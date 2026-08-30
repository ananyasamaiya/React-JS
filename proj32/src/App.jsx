import {useReducer} from 'react';
import reducerFunc from './app.js';
function App() {
  let [state,dispatch] = useReducer(reducerFunc,999);

  return (
    <div>
      <h1>State Data: {state}</h1>
      <button onClick={dispatch}>change state</button>

    </div>
  )
}

export default App
