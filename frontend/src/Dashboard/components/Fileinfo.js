import { CopyIcon } from 'lucide-react';
import React from 'react'

const Fileinfo = ({file}) => {
     
  const Size = file?.filesize ;
  const finalSize = Math.round(Size*100)/100;
   
    const copyHandeler = () => {
        const copiedurl = document.getElementById("fileurlbox").value;
        if(copiedurl != null){
            navigator.clipboard.writeText(copiedurl).then(()=>{
                console.log("copied");
            }).catch(()=>{
                console.log("Failed to copy url");
            })
        }
    }

  return (
    <div className='flex flex-col gap-4 p-4 w-full text-black'>

<label htmlFor="UserEmail" className="block text-lg font-medium text-gray-400"> File Name </label>
      <div className='w-full flex  rounded-md'>

        <input
          value={file?.filename}
          type="url"
          placeholder="http://localhost:3000/"
          className="w-5/6 outline-none rounded-md shadow-sm sm:text-md p-4"
        />
        
      </div>
      
      <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-400"> File Type </label>
      <div className='w-full flex  rounded-md'>

        <input
          value={file?.filetype}
          type="url"
          placeholder="http://localhost:3000/"
          className="w-5/6 outline-none rounded-md shadow-sm sm:text-md p-4"
        />
        
      </div>
      
      <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-400"> File Size </label>
      <div className='w-full flex  rounded-md'>

        <input
          value={finalSize + "MB"}
          type="url"
          placeholder="http://localhost:3000/"
          className="w-5/6 outline-none rounded-md shadow-sm sm:text-md p-4"
        />
      </div>

        <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-400"> File Url </label>
      <div className='w-full flex  rounded-md'>

        <input
          value={`http://localhost:3000/filepreview/${file?.fileid}`}
          type="url"
          title='Copy URL'
          id="fileurlbox"
          placeholder="http://localhost:3000/"
          className="w-5/6 outline-none rounded-md shadow-sm sm:text-md p-4"
        />
        
        <CopyIcon size={32} color="white" onClick={copyHandeler} className='flex justify-center items-center h-full ml-4 cursor-pointer'/>
      </div>

      <h2 className='text-center mt-5 font-bold text-slate-400 text-2xl'>Share the provided link to share the file.</h2>
    </div>
  )}

export default Fileinfo
