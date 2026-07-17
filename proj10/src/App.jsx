import { useState } from "react";

function App() {
  // let [value,SetValue] = useState(0);
  // let [value,SetValue] = useState(5.6);
  // let [value,SetValue] = useState("kartik");
  // let [value,SetValue] = useState({name:'mohan',age:32});
  // let [value,SetValue] = useState(true); 
  // object and boolean are not render
  let [value,SetValue] = useState(['om',10,5.6]); 
  // array as a single string 
  
   return (
    <div>
      <h2>{value}</h2>
      {/* object can't be pass but it's properties can be passed  */}
      {/* <h2>{value.name}</h2> */}
      </div>
  );
}

export default App
