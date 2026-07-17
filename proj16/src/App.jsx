import { useState } from "react"
import { netReq } from "./app.js"
function App() {
  let [records,setRecords] = useState([{download_url: 'https://static.vecteezy.com/system/resources/thumbnails/051/015/837/small/realistic-green-vine-leaves-on-transparent-background-perfect-for-nature-plant-and-organic-design-projects-free-png.png'}]);
  function showImgsReq(){
    netReq().then((data) => {
      setRecords(data)
    }).catch((err) => {
        console.log(err)
    })
}
  return(
    <div>
      <div>
        {records.map((next) =>(<img src={next.download_url} height={300} />))}
      </div>

      <input type="button" value="Show Images" onClick={showImgsReq} />
    </div>
  )
}

export default App
