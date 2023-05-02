import React from "react";
import { cardImageURL } from "../Constants";
import {BsFillStarFill} from  "react-icons/bs"
export default function RestaurantCard({name,avgRating,cloudinaryImageId,cuisines,deliveryTime,lastMileTravelString,costForTwoString,aggregatedDiscountInfo
}) {
  return (
    <div className="w-72 h-80 hover:border mx-3 hover:shadow-lg hover:border-zinc-300 m-auto my-6 px-4 py-4 cursor-pointer">
         <div className="w-[100%] h-[50%] mb-3 overflow-hidden">
         <img src={cardImageURL+cloudinaryImageId} className="w-full h-full "/>
         </div>
         <div className="text-[1.1rem] font-semibold mt-3">{name.length<20?(name):(name.substring(0,20)+"...")}</div>
         
         <div className="font-thin w-52 overflow-y-hidden text-sm ">{cuisines.slice(0,2).join(', ')}{((cuisines.length)-3)>0?(", +"+(cuisines.length-3)):("")}</div>
         <div className="divide-y divide-solid mt-2">
         <div className="flex flex-wrap">
         <div className={avgRating>0?(avgRating>=4?("bg-green-500 mt-[0.7rem] mr-3 w-12 h-[1.4rem] rounded-sm justify-center pr-1 text-white font-semibold flex text-sm"):("bg-amber-700 w-12 h-[1.4rem] mt-[0.7rem] mr-3 justify-center pr-1 rounded-sm text-white font-semibold flex text-sm")):("flex font-thin mt-[0.5rem] mr-4 text-zinc-700")}>
                <BsFillStarFill className=" mx-1 my-1"/> {isNaN(avgRating)?"--":avgRating}
         </div>
         <div className="font-semibold text-slate-800 text-xs">{costForTwoString!==''?<span className="text-2xl font-semibold">.</span>:<></>} &nbsp;&nbsp;
         {costForTwoString} &nbsp;&nbsp; {deliveryTime!==0?<span className="text-2xl font-semibold">.</span>:<></>} &nbsp;&nbsp;{deliveryTime+'min'}
         </div>
         </div>
         <div className="font-semibold text-yellow-700 text-base text-center mt-3 pt-2"> {aggregatedDiscountInfo?.header?(aggregatedDiscountInfo?.header):("No active Offer")}</div>
         </div>
    </div>
  )
}
