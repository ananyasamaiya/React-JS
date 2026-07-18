import { useState, useEffect} from "react"

function Image() {
  let [img,SetImg] = useState('https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1497832653543-F9EH524VOZ7ELRAFXIEV/Doraemon-12-1024x576.jpg');
  function changeToNobita(){
    SetImg('https://upload.wikimedia.org/wikipedia/en/3/3f/NobitaNobi.png');
  }
  function changeToDoraemon(){
    SetImg('https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1497832653543-F9EH524VOZ7ELRAFXIEV/Doraemon-12-1024x576.jpg');
  }
  useEffect(() =>{
    console.log(`${img.includes('Nobita')?'Nobita':'Doremon'} Image Update.....`)
  },[img]);

  return (
    <div>
      <h2>Doraemon Image</h2>
    <img src={img} height={300}/>
    <br />
    <button onClick={changeToNobita}>Nobita</button>
    <button onClick={changeToDoraemon}>Doraemon</button>
    </div>
  )
}

export default Image