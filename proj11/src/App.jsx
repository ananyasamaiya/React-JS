import { useState } from "react";

function App() {
  // let [value, setValue] = useState(['<h1>Hello World</h1>','<hr />', '<p>Lorem ipsum dolor dolorem nostrum atque nesciunt!</p>']);
  let [value, setValue] = useState([<h1>Hello World</h1>,<hr />,<p>Lorem ipsum dolor dolorem nostrum atque nesciunt!</p>]);

  return (
    <div>
      {value}
    </div>
  );
}

export default App
