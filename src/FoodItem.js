import React, {FC} from 'react';
import { FaLeaf, FaBacterium, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

export default function FoodItem ({ 
    title, 
    rating, 
    description, 
    image, 
    purchasedate, 
    expirydate }) {

    const onClickPopup = (a) =>{
        alert(a);
    };


  return (
    <div className=''>
        <div 
            className='relative h-56 overflow-hidden rounded-[1.3rem]' 
            onClick={()=>{onClickPopup(title)}}>
            <a
                className='absolute gradient z-30 h-full w-full rounded-[1.3rem]'>
            </a>
            <img src={image} alt={title} className='object-cover h-96 object-center'/>
            <div 
                className='z-40 absolute w-full bottom-5 px-4 text-white font-bold text-[20px] columns-1 sm:columns-1 md:columns-1 lg:columns-1 xl:columns-2'>
                    <div className=''>
                        {title}
                        <div className= 'text-[14px] text-gray-200 font-normal'>
                        
                            {description}
                        
                        </div>
                    </div>

                    <div className='text-right text-[14px] text-gray-200 font-normal'>
                        <div className='mt-2'>
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
                        </div>
                    </div>
                      
            </div>
        </div>

    </div>
    
  )
}
