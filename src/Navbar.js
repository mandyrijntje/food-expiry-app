import React from 'react'
import logoCropped from './assets/logoCropped.png';
import logo from './assets/logo.png';
import { BiWorld } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { FaPlus, FaUserCircle } from 'react-icons/fa';


export default function Navbar() {

  return (
    <div className='sticky top-0 z-50 primary shadow-lg shadow-black-200'>
      <div className = 'flex items-center justify-between sm:mx-2 md:mx-4 lg:mx-6'>
          <div className=' h-20 flex'>
            <img alt='img' src={logoCropped} className='w-40 object-cover hidden sm:block md:hidden lg:block' />
            <img alt='img' src={logo} className='w-20 object-cover mx-2 block sm:hidden md:block lg:hidden' />
          </div>
          <div 
            className='hidden md:flex justify-center items-center relative shadow-sm shadow-black-400 rounded-full border bg-white'>
            <input 
              type='search' 
              placeholder='' 
              className='rounded-full outline-0 py-2.5 w-[20rem]'/>
            <div 
              className='absolute flex justify-between w-full pl-6 pr-12 font-semibold text-gray-400/60'>
              <button className='w-full'>Name</button>
              <button className='border-l border-x px-6'>Date</button>
              <button className='w-full pl-2 '>Category</button>
            </div>
            <div className='secondary p-2 rounded-full mr-2 shadow-sm shadow-black-900 '>
                <FiSearch className='text-white'/>
            </div>
          </div>

          <div className='flex items-center pr-5 font-semibold text-white'>
            <div className= 'rounded-full p-2 flex items-center mx-2 transition hover:bg-[#009999] hover:shadow-sm hover:shadow-black-900 delay-100 ease-in-out'>
              {/* <FiMenu className='mr-4'/> */}

              <FaPlus className=''/>
              <p className='hidden sm:flex ml-0 sm:ml-1'>
                New
              </p>
            </div>
            <div className='flex items-center mx-2'>
            <BiWorld className=''/>
              <p>
                EN
              </p>
            </div>
            <div className= 'secondary w-8 md:w-24 rounded-full p-2 flex items-center shadow-sm shadow-black-900 mx-2 transition hover:bg-[#006666] delay-100 ease-in-out'>
              {/* <FiMenu className='mr-4'/> */}

              <FaUserCircle className=''/>
              <p className='hidden md:flex ml-0 md:ml-1'>
                Sign in
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
