import { useState } from 'react';
import { netReq } from './app';
// import Image from './components/image/Image'
import './App.css'
import Image from './components/image/Image.jsx';
function App() {
  let [imgs, setImgs] = useState([{download_url: 'https://static.vecteezy.com/system/resources/thumbnails/051/015/837/small/realistic-green-vine-leaves-on-transparent-background-perfect-for-nature-plant-and-organic-design-projects-free-png.png'}]);
  return(
    <div>
      <h1>Hello World</h1>
      <div>
        {imgs.map(img => (
            <Image url={img.download_url} />
        ))}

      </div>
      <button onClick={() => {netReq(setImgs)}}>Show Images</button>
    </div>
  );
}

export default App
