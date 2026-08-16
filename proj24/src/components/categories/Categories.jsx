import './Categories.css'
import { filterProducts } from './categories';
let cats = [
    {
        id:1, cat:'jewelery' ,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ktf23gyIVmoQajYQdI24B6KT4PVR-7OHb9qYsYotORWmoL1s14oRbo6S&s=10'
    },
    {
        id:2, cat:"men's clothing", img: 'https://www.shutterstock.com/image-photo/luxury-shopping-mall-department-clothing-260nw-2155458371.jpg'
    },
    {
        id:3, cat:"electronics", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeIjfibg5AoRyVyUJjMUB95XnQqS55CNDVqaXJ9yJgu3BsogwITvdN9sM&s=10'
    },
    {
        id:4, cat:"women's clothing", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxxoI6oSco7uTxdYaRQ2agqThfnpN6DuhOQ44zA2bEcWMp7__d6a_icw&s=10'
    }
];
function Categories({func}) {
  return (
    <div className="cat_box">
        {cats.map((next)=>(
            <div key={next.id} onClick={()=>{filterProducts(next.cat, func)}}>
                <img src={next.img}/>
                <h4 style={{marginTop:"2px"}}>{next.cat}</h4>
            </div>
        ))}
    </div>
  )
}

export default Categories