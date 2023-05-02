import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

export default function RestaturantMenuPage() {
  const {id} = useParams();
  const [menu,setMenu] = useState(null);
   const getMenu = async() =>{
      const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4384489&lng=77.0407101&restaurantId=${id}&submitAction=ENTER`)
      const json =await response.json();
      console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)

    }
   useEffect(()=>{
    getMenu();
   },[])
    return (
    <div><h1>{id}</h1></div>
  )
}
