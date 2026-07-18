import Text from './components/text/Text.jsx';
import Image from './components/image/Image.jsx';
import Counter from './components/counter/Counter.jsx';
import {useState} from 'react'
import {useEffect} from 'react'
function App() {
  let [state, setState] = useState(true);
  let [count,setCount] = useState(0);

  function changeComp(){
    if(state)
      setState(false);
    else
      setState(true);
  }
// // will trigger on state and count update
  useEffect(() =>{
      console.log(`${state?'Image':'Text'} UI Mounted`);
      
      return ()=>{
        console.log(`${state?'Image':'Text'} UI UnMounted`);
        
      };
  },[state]);


  return (
    <div style={{textAlign: 'center'}}>
      {state ? <Image /> : <Text />}

      <br />

      <Counter count={count} func={setCount}/>
      <br /><br />
      <button onClick={changeComp}>Toggle Image And Text</button>
      
    </div>
  )
}

export default App