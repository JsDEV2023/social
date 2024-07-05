import Feed from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import RightMenu from '@/components/RightMenu'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type='profile' />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex items-center flex-col justify-center">
            <div className="w-full h-64 relative">
              <Image src='/image.png' fill className='object-cover bg-gray-400 rounded-md'/>
              <Image src='/image.png' width={128} height={128} className='w-32 h-32 rounded-full object-cover absolute right-0 left-0 -bottom-16 m-auto ring-4 ring-white bg-gray-400'/>
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-medium'>Sanek</h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className='font-medium'>123</span>
                <span className='text-sm'>Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className='font-medium'>1.3K</span>
                <span className='text-sm'>Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className='font-medium'>13K</span>
                <span className='text-sm'>Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId='test'/>
      </div>
    </div>
  )
}

export default page
