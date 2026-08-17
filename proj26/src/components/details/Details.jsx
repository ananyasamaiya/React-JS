import React, { useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function Details() {
    let {id} = useParams();

    let [prod,setProd] = useState({
                                id: 0,
                                title: "----",
                                price: 0.0,
                                description: "-----",
                                category: "----",
                                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR-2D2K61Q-iJD1RqAJmMI19y59aIlWJ41-qWLsxKkQ&s=10",
                                rating: {
                                    rate: 0,
                                    count: 0
                                }
                            });

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((record)=>{
            console.log(record.data);
            setProd(record.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[]);

  return (
    <div style={{fontFamily: "verdana"}}>
        <h1 style={{marginLeft:"100px", color:"blue"}}>Product Details </h1>
    <div className='details_box'>
        <div className="left_block">
            <img src={prod.image} alt="" />
        </div>


        <div className="right_block">
            <h1>{prod.title}</h1>

            <div className="two_blocks">
                <div className='prod_info'>
                    <dl>
                        <dt>Rating</dt>
                        <dd>{prod.rating.rate}({prod.rating.count}) </dd>
                    </dl>
                </div>
                <div className='prod_info'>
                    <dl>
                        <dt>Category</dt>
                        <dd>{prod.category}</dd>
                    </dl>
                </div>
            </div>

            <div className='prod_info'>
                <dl>
                    <dt>Product Description</dt>
                    <dd className='description'>{prod.description}</dd>
                </dl>
            </div>

            <div className="two_blocks">
                <div className='prod_info'>
                    <dl>
                        <dt>Price</dt>
                        <dd>${prod.price}</dd>
                    </dl>
                </div>
                <div className='prod_info'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Details