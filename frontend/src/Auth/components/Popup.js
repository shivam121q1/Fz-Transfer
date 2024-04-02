import React, { useState } from 'react'

const Popup= (props)=>{
  const [popup,showpopup] = useState(true);
  return (
    <div role="alert" className={` ${popup === true ? "flex": "hidden"} z-10 fixed top-8 left-8 w-80 rounded-xl border border-white bg-gray-500 p-4`}>
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-black"> {props.title} </strong>

          <p className="mt-1 text-sm text-black">{props.desc}</p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600" onClick={()=>{showpopup(false)}}>
          <span className="sr-only">Dismiss popup</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="red"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Popup


