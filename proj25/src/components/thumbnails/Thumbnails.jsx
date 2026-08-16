import './Thumbnails.css'
function Thumbnails({rec}) {
  return (
    <div className='thumb_box'>
        <img src={rec.image}></img>
        <h4 title={rec.title} >{rec.title.substring(0,25)}...</h4>
        <h3 style={{color:"red", textAlign:"center"}}>$ {rec.price}</h3>
        <button>Add To cart</button>
    </div>
  )
}

export default Thumbnails