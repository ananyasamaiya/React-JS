import { useState } from "react";
function App(){
  let [count,setCount] = useState(0);
  function counter(){
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Click Count App</h1>
      <hr />
      <strong>Click Count : {count}</strong>
      <br /><br />

      <button type="button" onClick={counter}>Click me</button>
    </div>
  )
}

export default App;