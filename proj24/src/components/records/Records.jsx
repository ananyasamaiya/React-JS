import { useEffect, useState } from "react";

import './Records.css'
import Thumbnails from "../thumbnails/Thumbnails.jsx";

function Records({recs}) {
  
  return (
    <div className="rec_box">
        {recs.map((next)=>(
            <Thumbnails rec={next} key={next.id} />
        ))}
    </div>
  )
}

export default Records;