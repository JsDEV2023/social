import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-sm no-scrollbar'>
        <div className="flex gap-8">
            <div className="flex flex-col items-center gap-2 cursor-pointer">
                <Image src='' alt='' width={80} height={80} className='w-20 h-20 rounded-full ring-2'/>
                <span className='font-medium'></span>
            </div>
        </div>
    </div>
  )
}

export default Stories