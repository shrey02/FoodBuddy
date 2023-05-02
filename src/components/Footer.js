import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram,BsGithub,BsLinkedin} from 'react-icons/bs'
export default function Footer() {
  return (
   <div className='w-auto m-auto mt-10 border-t border-slate-100'>
    
    <div className="flex flex-col mx-auto h-auto">

      <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-auto h-[200px] bg-zinc-800">

        <div className="text-white font-normal text-4xl body-font font-BreeSerif">FoodBuddy</div>
        <div className='text-white font-BreeSerif'><a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Made by Shrey Sinha</a></div>
        {/* Hamburger icons created by Freepik - Flaticon */}
        <ul className="flex gap-[15px] text-slate-800 cursor-pointer">
          <li className="ease-in duration-200 text-white text-xl"><FaTwitter/></li>
          <li className="ease-in duration-200 text-white text-xl"><BsLinkedin/></li>
          <li className="ease-in duration-200 text-white text-xl"><BsInstagram/></li>
          <li className="ease-in duration-200 text-white text-xl"><BsGithub/></li>
        </ul>

      </div>

    </div>
    </div>
  )
}
