import { useState } from "react";

function App() {
  let [cities, setCities] = useState([<li>Jabalpur</li>, <li>Bhopal</li>, <li>Indore</li>,<li>Rewa</li>]);
  return (
    <div>
      <ol>
        {cities}
      </ol>
    </div>
  );
}

export default App
