import { useState } from "react";

function App() {
  let arr = useState(0); //hook

  function counter(){
    arr[1](arr[0] + 1);
  }
  return (
    <div>
      <h2>Counter App</h2>
      <hr />
      <strong>Click Count : {arr[0]}</strong>
      <br /><br />
      <button type="button" onClick={counter}>Click</button>
    </div>
  );
}

export default App
