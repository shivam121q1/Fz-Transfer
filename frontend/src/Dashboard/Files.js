import React from 'react'
import SideNav from './components/SideNav'

const Files = () => {
  return (
    <div className='flex bg-gray-900'>
      <div className='h-screen w-44 bg-slate-300'>
        <SideNav/>
      </div>
    <div className='w-full h-16 rounded-lg flex justify-between text-white p-4 items-center m-4 border'>
      <span>S.No</span>
      <span>File Name</span>
      <span>File Type</span>
      <span>File Size</span>
      <span>Uploaded on</span>
      <span className='text-blue-600 cursor-pointer'>Show File</span>
    </div>

    </div>
  )
}

export default Files
