import { useState } from "react";

function App(){
  let [state, setState] = useState(0);
  function changeState1(){
    setState(state+1);//state = 0 + 1
    setState(state+1);//state = 1 + 1
    setState(state+1);//state = 2 + 1
  }
  function changeState2(){
    setState((crSt) => crSt + 1);
    setState((crSt) => crSt + 1);
    setState((crSt) => crSt + 1);
  }
  return (
    <div>
      <h4>{state}</h4>
      <button type="button" onClick={changeState1}>Click me First</button>
      <button type="button" onClick={changeState2}>Click me Second</button>
    </div>
  );
}
export default App;