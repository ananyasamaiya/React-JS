import Cards from "../cards/Cards.jsx"
import './Records.css'
function Records({recs}) {
  return (
    <div id="rec_box">
      {recs.map((rec) =>(
        <Cards key={rec.id} rec={rec} />
      ))}
    </div>
  )
}

export default Records