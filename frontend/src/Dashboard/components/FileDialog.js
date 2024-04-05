import React , {useState} from 'react'
import { File, X } from 'lucide-react'

const FileDialog = ({src}) => {
    const Size = (src?.size*100);
    console.log(Size);
    const FinalSize = Math.floor(Size);
  return (
    <div className='border-2 border-main border-dashed mt-8 rounded-lg h-28 flex justify-between items-center text-main gap-4 bg-white'>
        <div className='flex items-center text-main'>
        <File color="blue" size={100}/>
            {src?.name} <br/>
            {src?.type} <br/>
            {FinalSize} MB <br/> 
        </div>
    </div>
  )
}

export default FileDialog
