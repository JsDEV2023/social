import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserInfoCard = ({userId}: {userId: string}) => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-lg shadow-md text-sm gap-4'>
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
            <span className='text-grey-500'>User Information</span>
            <Link href='/' className='text-blue-500 text-sm'>See all</Link>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-4 text-gray-500">
            <div className="flex items-center gap-2">
                <span className='text-xl text-black'>Alex Ankudinov</span>
                <span className='text-sm'>@alex_ank</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Alias, repudiandae porro? 
            </p>
            <div className="flex items-center gap-2">
                <Image src='/map.png' alt='' width={16} height={16} className='' />
                <span>Living in <b>Уфа</b></span>
            </div>
            <div className="flex items-center gap-2">
                <Image src='/school.png' alt='' width={16} height={16} className='' />
                <span>Went to <b>УУНиТ</b></span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                    <Image src='/link.png' alt='' width={16} height={16} className='' />
                    <Link href='@alex_ank' className='text-blue-500 font-medium'>Alexander Ankudinov</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <Image src='/date.png' alt='' width={16} height={16} className='' />
                    <span>Joined July 2024</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfoCard