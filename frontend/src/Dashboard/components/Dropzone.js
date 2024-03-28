import React, { useState } from 'react'
import axios from 'axios';
import FileDialog from './FileDialog';

const Dropzone = () => {
  const [File , setFile] = useState();
    const UploadHandeler = async() =>{

    const formData = new FormData();
    formData.append('file', File);

    try {
      const response = await axios.post('http://localhost:4000/api/v1/FileUplaod', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }

  }
  return (
    <div className='pt-32 ml-44 mr-44'>
      <div class="flex items-center justify-center w-full">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-16 h-16 mb-4 text-main dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-lg text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or <strong className='text-main'>drag</strong> and <strong className='text-main'>drop</strong></p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, PDF, Docx or GIF (MAX SIZE 100MB)</p>
                </div>
                <input onChange={(event)=> {
                  setFile(event.target.files[0])
                } } id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 

        {File ? <FileDialog src={File}/> : null}
        
          <div className='flex justify-center w-full mt-8'>
            <button type="button"
            onClick={UploadHandeler}
            className='flex gap-2 disabled:cursor-not-allowed justify-center items-center text-white bg-main hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Upload</button>
          </div>
          

    </div>
  )
}

export default Dropzone
