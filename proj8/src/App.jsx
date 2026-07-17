import { useState } from "react";

function App(){
  let [img, setImg] = useState("https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png");
  let [name, SetName] = useState("User Name");
  let [i, SetI] = useState(0);

  let data = [
  {
    "name": "Emma Johnson",
    "age": 25,
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "name": "Liam Smith",
    "age": 30,
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "name": "Sophia Brown",
    "age": 22,
    "image": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "name": "Noah Davis",
    "age": 28,
    "image": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "name": "Olivia Wilson",
    "age": 27,
    "image": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    "name": "James Taylor",
    "age": 35,
    "image": "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    "name": "Ava Martinez",
    "age": 24,
    "image": "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    "name": "William Anderson",
    "age": 32,
    "image": "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    "name": "Isabella Thomas",
    "age": 26,
    "image": "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    "name": "Benjamin Jackson",
    "age": 29,
    "image": "https://randomuser.me/api/portraits/men/10.jpg"
  }
];
  
  function nextRecord(){
    let obj = data[i];
    setImg(obj.image);
    SetName(obj.name);
    SetI((crSt) => crSt + 1);
  }
  function prevRecord(){
    SetI((crSt) => crSt - 1);
    let obj = data[i];
    setImg(obj.image);
    SetName(obj.name);
  }
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} height={300} />
      <br /><br />
      <button type="button" onClick={prevRecord}>Prev</button>
      <button type="button" onClick={nextRecord}>Next</button>
    </div>
  );
}

export default App;