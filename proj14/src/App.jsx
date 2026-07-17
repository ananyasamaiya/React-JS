import { useState } from "react";

function App() {
  let [cities, setCities] = useState(['Jabalpur', 'Bhopal', 'Indore', 'Satna', 'Rewa']);
  return (
    <div>
      <ol>
        {cities.map((city,i) => <li key={i}>{city}</li>)}
      </ol>
    </div>
  );
}

export default App
