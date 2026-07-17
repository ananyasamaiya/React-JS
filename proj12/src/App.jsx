import { useState } from "react";

function App() {
  let [cities, setCities] = useState(['Jabalpur', 'Bhopal', 'Indore', 'Satna', 'Rewa']);
  return (
    <div>
      <ol>
        <li>{cities[0]}</li>
        <li>{cities[1]}</li>
        <li>{cities[2]}</li>
        <li>{cities[3]}</li>
        <li>{cities[4]}</li>
      </ol>
    </div>
  );
}

export default App
