import { useState } from 'react'
import {arr} from './app.js'
function App() {
  let [records, setRecords] = useState(arr);
  return (
    <div>
      <table border={1} align='center' width="70%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>College</th>
            <th>Phone</th>
            <th>Pic</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) =>(
            <tr>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.college}</td>
              <td>{record.phone}</td>
              <td><img src={record.image}  height="60" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
