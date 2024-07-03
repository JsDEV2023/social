import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 shadow-md bg-white rounded-lg flex gap-4 justify-between text-sm'>
        <Image 
            src='' 
            alt='' 
            width={48} 
            height={48} 
            className="w-12 h-12 object-cover rounded-full" 
        />
        <div className="flex-1">
            <div className="flex gap-4 ">
                <textarea placeholder='What`s on your mind?' className='p-2 flex-1 bg-slate-100 rounded-lg'></textarea>
                <Image 
                    src='/emoji.png' 
                    alt='' 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 cursor-pointer self-end" 
                />
            </div>
            <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src='/addImage.png' 
                        alt='' 
                        width={20} 
                        height={20} 
                        className="w-5 h-5 cursor-pointer self-end" 
                    />
                    Photo
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src='/addVideo.png' 
                        alt='' 
                        width={20} 
                        height={20} 
                        className="w-5 h-5 cursor-pointer self-end" 
                    />
                    Video
                </div>
                <div className="flex items-center gap-2 cursor-pointer ">
                    <Image 
                        src='/addevent.png' 
                        alt='' 
                        width={20} 
                        height={20} 
                        className="w-5 h-5 cursor-pointer self-end" 
                    />
                    Event
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image 
                        src='/poll.png' 
                        alt='' 
                        width={20} 
                        height={20} 
                        className="w-5 h-5 cursor-pointer self-end" 
                    />
                    Poll
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost