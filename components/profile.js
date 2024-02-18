import React from 'react'
import Avatar from './avatar'

export default function Profile({ setViewProfile }) {

  const closeProfileDetails = () => {
    document.body.style.overflow="auto";
    setViewProfile(false);
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-500 bg-opacity-80 p-4'>
      <div className='bg-white rounded-lg shadow relative p-4 md:p-6 w-full md:w-2/3 lg:w-1/2 z-10'>
        <div className='absolute right-4 top-4 hover:bg-gray-50 px-2 py-1 rounded text-gray-500 cursor-pointer' onClick={closeProfileDetails}>X</div>
        <div className='text-sm'>
          <Avatar />
          <div className='my-4'>
            <div className='font-semibold text-lg mb-2'>Prabhat Singh</div>
            <div>prabhat@getcrux.ai</div>
          </div>
          <div className='flex gap-2 bg-gray-100 rounded-lg w-fit p-1'>
            <div className='py-1 px-3 bg-white rounded cursor-pointer'>College</div>
            <div className='py-1 px-3 hover:bg-white rounded cursor-pointer'>Project</div>
            <div className='py-1 px-3 hover:bg-white rounded cursor-pointer'>Professional Experience</div>
          </div>
          <div className='flex flex-col gap-4 p-4 pb-0'>
            <div><span className='font-medium mt-2'>Name:</span>Prabhat Singh</div>
            <div><span className='font-medium mt-2'>Branch:</span>Eco</div>
            <div><span className='font-medium mt-2'>Degree:</span>Philosophy</div>
            <div><span className='font-medium mt-2'>CGPA:</span>10</div>
            <div><span className='font-medium mt-2'>Start:</span>19 Jan 2017</div>
            <div><span className='font-medium mt-2'>End:</span>19 Jan 2021</div>
          </div>
        </div>
      </div>
    </div>
  )
}
