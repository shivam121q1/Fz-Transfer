import React , {useState} from 'react'
import { File, X } from 'lucide-react'

const FileDialog = ({src}) => {
  return (
    <div className='border-2 border-main border-dashed mt-8 rounded-lg h-28 flex justify-between items-center text-main gap-4 bg-white'>
        <div className='flex items-center text-main'>
        <File color="blue" size={100}/>
        
            {src?.name} <br/>
            {src?.type} <br/>
            {src?.size} Bytes <br/> 


        </div>
    </div>
  )
}

export default FileDialog
