import { Download, File, Share2Icon } from 'lucide-react';
import React, { useState } from 'react';


const Fileimage = (props) => {

  const [show,setShow] = useState(false);

  const ShareHandeler = () => {
    setShow(true);
    props.share(true);
  }
  const DownloadHandeler = async() => {
    try {
      // Send a request to the backend to download the file
      const response = await fetch(`http://localhost:4000/api/v1/filepreview/${props.file?.fileid}`);
      const blob = await response.blob();
      
      // Create a temporary link element to trigger the download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = props.file?.filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

    }catch (error) {
      console.error('Error downloading file:', error);
    }
  }
  return (
    <div className='h-full w-full m-4 flex flex-col rounded-lg overflow-hidden justify-center items-center'>
        <File size={96} color="green"/>
      <div className='flex w-full justify-center font-semibold h-1/4'>
        <h2>File Name: {props.file?.filename}</h2>
      </div>
      
      <div className='flex gap-8'>
        <button className='p-2 bg-main border flex gap-2 justify-center items-center border-black rounded-md' onClick={ShareHandeler}>Share File <Share2Icon/></button>
        <button className='p-2 bg-green-600 border text-white justify-center items-center flex gap-2 border-black rounded-md' onClick={DownloadHandeler}>Download File <Download color="white"/></button>
      </div>
    </div>
   
  )
}

export default Fileimage