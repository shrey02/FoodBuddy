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
    
      let dataIndex=-1;
      let carouselIndex=-1;
      for(let i=0;i<jsonData?.data?.cards.length;i++){
        if(jsonData?.data?.cards[i].cardType=="seeAllRestaurants"){
          dataIndex=i;break;
        }
      }
      for(let i=0;i<jsonData?.data?.cards.length;i++){
         if(jsonData?.data?.cards[i].cardType=='carousel'){
          carouselIndex=i;
          break;
         }
      }
      if(dataIndex>=0)setRestaurants(jsonData?.data?.cards[dataIndex]?.data?.data?.cards)
      if(dataIndex>=0)setFilteredRestaurants(jsonData?.data?.cards[dataIndex]?.data?.data?.cards)
      if(dataIndex>=0)setRestaurantNumber(jsonData?.data.cards[dataIndex]?.data?.data?.totalOpenRestaurants)
      if(carouselIndex>=0)setCarousel(jsonData?.data?.cards[carouselIndex]?.data?.data?.cards)
      console.log(carousel,carouselIndex)
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
   <div className="flex bg-zinc-800 h-auto">{carousel!==null?<Carousel carousel={carousel}/>:<></>}</div>
   <div className="flex align-middle justify-center">
   <SearchBar setFilteredRestaurants={setFilteredRestaurants} 
    restaurants={restaurants}
    numberOfRestaurants={restaurantNumber}
    />
    </div>
    <div className="flex flex-wrap align-middle justify-center self-stretch">
        {
            filteredRestaturants.map((restaurant)=>(
              <Link key={restaurant.data.id} to={'/restaurant/'+restaurant.data.id}>  <RestaurantCard key={restaurant.data.id} {...restaurant.data}/> </Link>
            ))
        }
    </div></>
  )}
    </>
  )
}
