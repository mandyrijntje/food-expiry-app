import React from 'react'

export default function Filter(props) {


  return (
    <div className=
      {'text-[13px] sm:text-[16px] text-gray-500 py-1 px-2  transition hover:text-black hover:border-b-4 hover:border-black hover:shadow-sm hover:shadow-black-400 delay-100 duration-200 ease-out'}
      {...props}>
        <button onClick={()=>{props.passcategory(props.title)}}>
        <div className='flex justify-center' >
         {props.icon}
        </div>
        {props.title}
        </button>
    </div>
  )
}
