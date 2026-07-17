function App(){
  let count = 22
  function counter(){
    count++
   console.log(count); 
  }
  return (<div>
    <h2>Counter App</h2>
    <hr />
    <strong>Click Count: {count}</strong>
    <br />
    <input type="button" onClick={counter} value="Click me"/>
  </div>)
}

export default App;