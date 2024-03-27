import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { Share, File } from 'lucide-react';
const SideNav = () => {
    const router = useNavigate()
    

    const menuItem = [
      {
        id: 1,
        name : 'Upload',
        icon: Share,
        path: '/Upload'
      },
      {
        id: 2,
        name : 'Files',
        icon: File,
        path: '/Files'
      }
    ]
  
    return (
      <div className='border-r h-full w-full max-md:hidden '>
        <div className='w-full flex justify-center font-bold h-20 text-gray-500 items-center  border-b'>
          Fz-Transfer
  
        </div>
        <div className='w-full flex flex-col '>
          {menuItem.map((item,index)=>(
            <button className={`w-full flex gap-2 h-20  items-center float-start hover:bg-gray-100 px-6`}
            onClick={()=>{router(menuItem[index].path)}}
             >
              <item.icon/>
              <h2>{item.name}</h2>
            </button>
          ))}
        </div>
      </div>
    )
}

export default SideNav
