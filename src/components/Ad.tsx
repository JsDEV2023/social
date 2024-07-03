import Image from 'next/image'
import React from 'react'

const Ad = ({size}: {size: 'sm' | 'md' | 'lg'}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* TOP */}
        <div className="flex items-center justify-between text-gray-500 font-medium">
            <span>Sponsored Ads</span>
            <Image src='/more.png' alt='' width={16} height={16} className='' />
        </div>
        {/* BOTTOM */}
        <div className={`flex flex-col mt-4 ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
            <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
                <Image src='' alt='' fill className='rounded-lg object-cover bg-gray-400'/>
            </div>
            <div className="flex items-center gap-4">
                <Image src='' alt='' width={24} height={24} className='rounded-full object-cover w-6 h-6 bg-gray-400'/>
                <span className='text-blue-500 font-medium'>Wild Cats</span>
            </div>
            <p className={`${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Recusandae amet perferendis id magnam porro quidem debitis
                quis nam tenetur officiis tempore ad similique iusto illo
                 veniam soluta, quasi a maiores.
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>
        </div>
    </div>
  )
}

export default Ad