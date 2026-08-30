import {useRef} from 'react'
function App() {
  let h1Elm = useRef();
  let btnElm = useRef();
  function changeText() {
    // let h1E = document.querySelector('h1');
    // h1E.innerText = "Hello....";

    h1Elm.current.innerText = "Hello....";
    h1Elm.current.style.color = "red";

    btnElm.current.style.backgroundColor = "green";
  }
  return (
    <div>
       <h1 ref={h1Elm}>Hi....</h1>
       <button ref={btnElm} onClick={changeText}>Change text</button>
    </div>
  )
}

export default App
