import { listCategories } from "./categories.js";
import { useState } from "react";
import Thumbnails from "../thumbnails/Thumbnails.jsx";
import "./Categories.css";

function Categories({selCatFunc}) {
  let [cats, setCats] = useState(listCategories());
  return (
    <div id="cat_box">
      {cats.map((cat) => (
        <Thumbnails key={cat.label} icon={cat.icon} label={cat.label} setSelCat={selCatFunc}/>
      ))}
    </div>
  );
}

export default Categories;
