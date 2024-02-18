import React from 'react'
import Image from 'next/image';
import FlagImg from "@/public/images/flag.png";
import { useRouter } from 'next/navigation'

export default function JobRole({ setViewJobRole }) {
  const router = useRouter()

  const closeJobRole = () => {
    document.body.style.overflow = "auto";
    setViewJobRole(false);
  }

  const submitForm=(e)=>{
    e.preventDefault();
    router.push('/filtered');
  }

  return (
    <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-500 bg-opacity-80 p-4'>
      <div className='bg-white rounded-lg shadow relative p-4 md:p-6 w-full md:w-2/3 lg:w-1/2 z-10'>
        <div className='absolute right-4 top-4 hover:bg-gray-50 px-2 py-1 rounded text-gray-500 cursor-pointer' onClick={closeJobRole}>X</div>
        <div className='text-sm'>
          <div className='border-2 border-gray-200 p-2 w-fit rounded-lg'>
            <Image src={FlagImg} height={30} width={30} alt="Flag" />
          </div>
          <div className='mt-4'>
            <div className='font-semibold text-lg mb-2'>Add Role</div>
            <div className='text-gray-600'>Add the job description</div>
          </div>
          <form className='mt-4' onSubmit={submitForm}>
            <div className='flex flex-col'>
              <label className='font-medium'>Role*</label>
              <input type="text" required placeholder='Full stack developer' className='outline-none border-2 border-gray-200 focus:border-[#423DDB] rounded-lg py-1.5 px-3 mt-1 text-gray-600'></input>
            </div>
            <div className='flex flex-col mt-4'>
              <label className='font-medium'>Job Description*</label>
              <textarea required rows={4} placeholder='Design, develop, and maintain both front-end and back-end components of web applications to ensure seamless functionality and user experience.' className='outline-none border-2 border-gray-200 focus:border-[#423DDB] rounded-lg py-1.5 px-3 mt-1 text-gray-600'></textarea>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button type="reset" className="border-2 border-gray-200 hover:bg-gray-50 w-full py-2 rounded-lg shadow-sm">Clear</button>
              <button type="submit" className="text-white bg-[#5E5ADB] hover:bg-[#423DDB] border-2 border-[#423DDB] w-full py-2 rounded-lg shadow-sm">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
