import {React,useState} from 'react'
import { useDispatch } from 'react-redux'
import {BsFilterSquareFill} from 'react-icons/bs'

import { deliveryTime,relevance,rating,costHighToLow,costLowToHigh } from '../utils/dataSlice'; 

export default function SortBy() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='relative'>
    
      <button onClick={toggleMenu} className=''>
       <BsFilterSquareFill className='w-6 h-10 text-neutral-800'/>
      </button>
      <ul className={isOpen?('absolute top-full right-0 w-[15rem] bg-white rounded-b-lg shadow-lg overflow-hidden transition-all duration-300 max-h-screen opacity-100'):'max-h-0 hidden transition-all duration-300'}>
        <li className=' px-4 py-2 hover:bg-gray-200'><button className="w-auto h-[1.5rem]  mx-2 text-center pl-3 pr-3 mr-3  text-black hover:text-black  font-semibold  flex"
        onClick={()=>{
            dispatch(deliveryTime());
            setIsOpen(!isOpen);
        }}>Delivery Time</button></li>
        <li className=' px-4 py-2 hover:bg-gray-200'><button className="w-auto h-[2rem]  mx-2 text-center pl-3 pr-3 mr-3  text-black hover:text-black  font-semibold  flex"
        onClick={()=>{
          dispatch(relevance());
          setIsOpen(!isOpen);
      }}>Relevance</button></li>
        <li className=' px-4 py-2 hover:bg-gray-200'><button className="w-auto h-[2rem]  mx-2 text-center pl-3 pr-3 mr-3  text-black hover:text-black  font-semibold  flex"
        onClick={()=>{
          dispatch(rating());
          setIsOpen(!isOpen);
      }}>Rating</button></li>
      <li className=' px-4 py-2 hover:bg-gray-200'><button className="w-auto h-[2rem]  mx-2 text-center pl-3 pr-3 mr-3  text-black hover:text-black  font-semibold  flex"
        onClick={()=>{
          dispatch(costHighToLow());
          setIsOpen(!isOpen);
      }}>Cost High to Low</button></li>
      <li className=' px-4 py-2 hover:bg-gray-200'> <button className="w-auto h-[2rem]  mx-2 text-center pl-3 pr-3 mr-3  text-black hover:text-black  font-semibold  flex"
        onClick={()=>{
          dispatch(costLowToHigh());
          setIsOpen(!isOpen);
      }}>Cost Low to High</button></li>
      </ul>
    </div>
  )
}
