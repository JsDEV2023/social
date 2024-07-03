import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FriendRequest = () => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-lg shadow-md text-sm gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className='text-grey-500'>Friend Requests</span>
            <Link href='/' className='text-blue-500 text-sm'>See all</Link>
        </div>
        {/*USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src='' alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Bruce Lee</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer'/>
                <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src='' alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Bruce Lee</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer'/>
                <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src='' alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover'/>
                <span className='font-semibold'>Bruce Lee</span>
            </div>
            <div className="flex gap-3 justify-end">
                <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer'/>
                <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default FriendRequest