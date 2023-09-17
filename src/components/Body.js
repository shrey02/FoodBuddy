import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";
import Carousel from "./Carousel";

export default function Body() {
  const data_url = useSelector((store) => store.dataUrl.url);
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaturants,setFilteredRestaurants] = useState([]);
    const [restaurantNumber,setRestaurantNumber] = useState(0);
    const [carousel,setCarousel] = useState(null)
   
    async function getRestaurants(){
     try{
      const response = await fetch(data_url)
      const jsonData =await response.json();
      // console.log(jsonData)
      setCarousel(jsonData?.data?.cards[1]?.card?.card?.imageGridCards)
      // console.log(carousel)
      let dataIndex=-1;
      let carouselIndex=-1;
      for(let i=0;i<jsonData?.data?.cards.length;i++){
        if(jsonData?.data?.cards[i]?.card?.card?.id=="restaurant_grid_listing"){
          dataIndex=i;
          // console.log(i);
          break;
        }
      }
      if(dataIndex>=0){
      setRestaurants(jsonData?.data?.cards[dataIndex].card.card.gridElements.infoWithStyle.restaurants)
      // console.log(jsonData?.data?.cards[dataIndex].card.card.gridElements.infoWithStyle.restaurants)
      
      
      // console.log(jsonData?.data?.cards[1]?.card?.card?.imageGridCards)
      }
      if(dataIndex>=0)setFilteredRestaurants(jsonData?.data?.cards[dataIndex].card.card.gridElements.infoWithStyle.restaurants)
      if(dataIndex>=0)setRestaurantNumber(jsonData?.data.cards[dataIndex]?.data?.data?.totalOpenRestaurants)
      //console.log(filteredRestaturants,'hello there')
      
      
    }
    catch{}
    }

    useEffect(()=>{
        getRestaurants();
    },[data_url])

    if(!restaurants)return;

  return (
    <>
    
    {restaurants?.length===0?(<div className="flex flex-wrap align-middle justify-center self-stretch my-28">{
      Array(15)
      .fill("").map((card,index)=>(
            <Shimmer key={index}/>
      ))
      }</div>):
   ( <>
   <div className="flex bg-zinc-800 h-auto">
    {carousel!==null?<Carousel carousel={carousel}/>:<></>}</div>
   <div className="flex align-middle justify-center">
   <SearchBar setFilteredRestaurants={setFilteredRestaurants} 
    restaurants={restaurants}
    numberOfRestaurants={restaurantNumber}
    />
    </div>
    <div className="flex flex-wrap align-middle justify-center self-stretch">
        {
            filteredRestaturants.map((restaurant)=>(
              <Link key={restaurant.info.id} to={'/restaurant/'+restaurant.info.id}>  <RestaurantCard key={restaurant.info.id} {...restaurant.info}/> </Link>
            ))
        }
    </div></>
  )}
    </>
  )
}
