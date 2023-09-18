import React from 'react'
import { useState } from 'react';
import { filterData } from '../utils/Helper';
import { BsSearch } from 'react-icons/bs';
import { CgArrowsExchange } from 'react-icons/cg'
import SortBy from './SortBy';

export default function SearchBar({restaurants,setFilteredRestaurants,numberOfRestaurants}) {
  const [searchText,setSearchText] = useState("");
  //console.log('here is the data');
  //console.log(restaurants)
  return (
    <div className='bg-[#FC8019] w-[100%] justify-center align-middle content-center text-center flex max-[850px]:block'>
      <div className='my-auto text-2xl font-BreeSerif max-[850px]:my-[2rem] text-white flex text-center content-center align-middle justify-center'>{numberOfRestaurants} &nbsp; restaurants &nbsp; <CgArrowsExchange className=' w-[2rem] h-[2rem]'/></div>
    <div className='text-center my-8 mx-3 relative h-16 p-[0.5rem] w-5/12 rounded-lg flex max-[750px]:w-10/12 max-[900px]:w-9/12 m-auto max-[850px]:mx-[4rem] max-[500px]:mx-[2rem]'>
    <div className='pt-4 pl-2 rounded-l-lg bg-white w-6 border-none m-0'>
    <BsSearch />
    </div>
    <input type='text' placeholder='restaurants by name and cuisines' value={searchText} className='w-10/12 h-12 text-lg px-3 pb-1 focus:outline-none  border-none m-0 left-[30%]' onChange={(e)=>{
      setSearchText(e.target.value);
    }}
    >
      
    </input>
    <div className='w-8 h-12 bg-white pt-1 pr-1'>
    <SortBy/>
    </div>
    <button className='bg-neutral-800 w-20 h-12  border-gray-400 text-white font-semibold rounded-r-lg  left-[64%] top-2'
    onClick={()=>{
      setFilteredRestaurants(filterData(searchText,restaurants,1,1))
    }}
    >
        Search
    </button>
    </div>
    </div>
  )
}
