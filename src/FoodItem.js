import React from 'react';
import { FaLeaf, FaBacterium, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

export default function FoodItem({ title, rating, description, image, purchasedate, expirydate }) {


  return (
    <div className=''>
        <div className='relative'>
            <div 
                className='absolute gradient h-full w-full rounded-[1.3rem]'>
            </div>
            <img src={image} alt={title} className='object-cover rounded-[1.3rem]'/>
            <div 
                className='absolute w-full bottom-8 px-4 text-white font-bold text-[20px] columns-1 sm:columns-2'>
                    <div className=''>
                        {title}
                        <div className= 'text-[16px] text-gray-200 font-normal'>
                        
                            {description}
                        
                        </div>
                    </div>

                    <div className='text-right text-[16px] text-gray-200 font-normal'>
                        <p className='mt-2'>
                            <span className='flex justify-end  my-2'>
                                {[...Array((5-rating))].map((e, j) => <FaBacterium key={j} className='text-red-200'/>)}
                                {[...Array(rating)].map((e, i) => <FaLeaf key={i} className='text-green-200'/>)}
                            </span>
                            <div className=''>
                                <p className='flex items-center justify-end'>
                                    <FaShoppingCart className='mr-1'/>
                                    {purchasedate}
                                </p>
                                <p className='flex items-center justify-end'>
                                    <FaTrashAlt className='mr-1'/>
                                    {expirydate}
                                </p>
                            </div>
                        </p>
                    </div>
                      
            </div>
        </div>

    </div>
    
  )
}
