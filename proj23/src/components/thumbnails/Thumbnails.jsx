import showFilteredResult from './thumbnails'
import './Thumbnails.css'


function Thumbnails({icon,label,setSelCat}) {
  return (
    <div className="thmnl" onClick={() =>{showFilteredResult(label,setSelCat)}}>
        <img src={icon} /> <br />
        <strong>{label}</strong>
    </div>
  )
}

export default Thumbnails