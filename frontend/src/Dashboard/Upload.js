import React from 'react'
import Dropzone from './components/Dropzone'
import SideNav from './components/SideNav'
const Upload = () => {
  return (
    <div className='bg-gray-900 flex h-screen w-full'>
      <div className='w-44 h-full bg-slate-300'>
        <SideNav/>
      </div>
      
      <div className='w-full h-full'>
        <Dropzone/>
      </div>
    
    </div>
  )
}

export default Upload
