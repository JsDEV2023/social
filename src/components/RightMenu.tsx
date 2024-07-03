import React from 'react'
import FriendRequest from './FriendRequest'
import Birthday from './Birthday'
import Ad from './Ad'

const RightMenu = ({userId}: {userId?: string}) => {
  return (
    <div className='flex flex-col gap-6'>
      <FriendRequest />
      <Birthday />
      <Ad size='md'/>
    </div>
  )
}

export default RightMenu