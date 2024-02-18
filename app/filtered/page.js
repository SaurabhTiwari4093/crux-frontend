"use client"
import Profile from '@/components/profile'
import Table from '@/components/table'
import React, { useState } from 'react'

export default function Filtered() {
    const [viewProfile, setViewProfile] = useState(false);

    return (
        <>
            {
                viewProfile ? <Profile setViewProfile={setViewProfile} /> : <></>
            }
            <div className="flex justify-center">
                <div className='max-w-7xl p-4 w-full pt-8'>
                    <div>
                        <div className='text-xl font-bold'>4 Resumes filtered</div>
                        <div className='text-gray-500 text-sm'>Purpose Selection</div>
                    </div>
                    <div className="border-b-2 border-gray-200 mt-4"></div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="col-span-3 md:col-span-1 mb-4 md:mb-0">
                            <div className='font-semibold'>Recommended Profiles</div>
                            <div className='text-sm'>Resumes fit for the Job role</div>
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <Table setViewProfile={setViewProfile} />
                        </div>
                    </div>
                    <div className="border-b-2 border-gray-200 mt-4"></div>
                    <div className="grid grid-cols-3 mt-4">
                        <div className="col-span-3 md:col-span-1 mb-4 md:mb-0">
                            <div className='font-semibold'>Non - Recommended Profiles</div>
                            <div className='text-sm'>Resumes that don't fit for the Job role</div>
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <Table setViewProfile={setViewProfile} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
