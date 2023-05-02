import React from 'react'

export default function Shimmer() {
  return (
    <div className='w-64 h-72 mx-8'>
        <div className='w-[100%] h-[50%] rounded-lg bg-stone-300 my-1 animate-pulse'></div>
        <div className='w-[70%] h-[6%] bg-stone-300 my-3 rounded-lg animate-pulse'></div>
        <div className='w-[80%] h-[6%] bg-stone-300 rounded-lg animate-pulse'></div>
    </div>
  )
}
