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
  //in this case if we haven't pass the second arguement then the useEffect will trigger on each rerender
  // useEffect(() =>{
  //     console.log('UI Re - Rendered');
  // });

  //with we pass second argument trigger first render only
  // useEffect(() =>{
  //     console.log('UI Re - Rendered');
  // },[]);

  //add dependenceny
  //if state change trigger 
  //and first time also
  // useEffect(() =>{
  //     console.log('UI Re - Rendered');
  // },[state]);

// will trigger on count update
  useEffect(() =>{
      console.log('UI Re - Rendered');
  },[count]);

// // will trigger on state and count update
//   useEffect(() =>{
//       console.log('UI Re - Rendered');
//   },[state, count]);


  return (
    <div>
      {/* conditional rendering ?:  */}
      {state ? <Image /> : <Text />}

      <br />

      <Counter count={count} func={setCount}/>
      <br /><br />
      <button onClick={changeComp}>Toggle Image And Text</button>
      
    </div>
  )
}

export default App