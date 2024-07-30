import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Cities() {
  
    const [cities,setCities]= useState([])
    const imgurl = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/"
    const getCity = () =>{
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
            method: 'GET',
        })
        .then(data=>setCities(data.data.data))
        .catch(err=>console.log("Xatolik",err))
    }
  
    useEffect(()=>{
        console.log("salom")
        getCity()
    },[])
    return (
    <div>
      {
        cities &&cities.map((item,index)=>(
          <div key={index}> 
            <h1 width={200}>{item.name}</h1>
            <img width={200} src={`${imgurl}${item.image_src}`}
             alt="salom" />
            <h2>{item.text}</h2>
          </div>  
        ))
      }
    </div>
  )
}
