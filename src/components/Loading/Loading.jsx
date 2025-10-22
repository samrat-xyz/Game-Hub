import React from 'react'
import { RingLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <RingLoader size={68}/>
    </div>
  )
}

export default Loading
