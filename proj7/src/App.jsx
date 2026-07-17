import { useState } from "react";

function App(){
  let [img, setImg] = useState("https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png");
  let [name, SetName] = useState("User Name");
  function changeMohanRecord(){
    // img = "https://in.bmscdn.com/iedb/artist/images/website/poster/large/mohan-1496-24-03-2017-12-52-25.jpg"
    setImg("https://in.bmscdn.com/iedb/artist/images/website/poster/large/mohan-1496-24-03-2017-12-52-25.jpg");
    
    setName("Mohan");
  }
  function changeMonikaRecord(){
    setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNzvJhJJfJQFK7JsL3H-3HYCbSOIBkXWS28kwtSqHisHCzZgJ4idqBI8&s=10")
    setName("Monika")
  }
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} height={300}/>
      <br /><br />
      <button type="button" onClick={changeMohanRecord}>Mohan</button>
      <button type="button" onClick={changeMonikaRecord}>Monika</button>
    </div>
  );
}

export default App;