import React from 'react';
import Avatar from './avatar';

export default function Table({ setViewProfile }) {

    const viewProfileDetails = () => {
        document.body.style.overflow = "hidden";
        setViewProfile(true);
    }

    return (
        <table className='w-full text-left text-xs md:text-sm'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='font-normal border-b p-2 md:p-3 rounded-tl-lg'>Name</th>
                    <th className='font-normal border-b p-2 md:p-3'>Relevance Score</th>
                    <th className='font-normal border-b p-2 md:p-3'>Resume Link</th>
                    <th className='font-normal border-b p-2 md:p-3 rounded-tr-lg'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border-b p-2 md:p-3 flex items-center gap-2'>
                        <div className='hidden sm:block'>
                            <Avatar />
                        </div>
                        <div>
                            <div className='font-medium'>Prabhat Singh</div>
                            <div className='text-xs'>olivia@untitledui.com</div>
                        </div>
                    </td>
                    <td className='border-b p-2 md:p-3'>100</td>
                    <td className='border-b p-2 md:p-3 text-[#423DDB] font-medium cursor-pointer'>Link</td>
                    <td className='border-b p-2 md:p-3 font-medium cursor-pointer' onClick={viewProfileDetails}>View Details</td>
                </tr>
                <tr>
                    <td className='border-b p-2 md:p-3 flex items-center gap-2'>
                        <div className='hidden sm:block'>
                            <Avatar />
                        </div>
                        <div>
                            <div className='font-medium'>Wolf Gupta</div>
                            <div className='text-xs '>olivia@untitledui.com</div>
                        </div>
                    </td>
                    <td className='border-b p-2 md:p-3'>92</td>
                    <td className='border-b p-2 md:p-3 text-[#423DDB] font-medium cursor-pointer'>Link</td>
                    <td className='border-b p-2 md:p-3 font-medium cursor-pointer' onClick={viewProfileDetails}>View Details</td>
                </tr>
            </tbody>
        </table>
    )
}
