import React from 'react';
import Filter from './Filter';
import { FaAppleAlt, FaFish, FaBreadSlice } from 'react-icons/fa';
import { GiBananaPeeled, GiGrapes, GiOrangeSlice, GiTomato, GiPotato, GiRoastChicken, GiMeat } from 'react-icons/gi';

export default function FilterBar() {

  const sorting = [
      {title: "Apple", icon: <FaAppleAlt />},
      {title: "Banana", icon: <GiBananaPeeled />},
      {title: "Grape", icon: <GiGrapes />},
      {title: "Orange", icon: <GiOrangeSlice />},
      {title: "Tomato", icon: <GiTomato />},
      {title: "Potato", icon: <GiPotato />},
      {title: "Chicken", icon: <GiRoastChicken />},
      {title: "Fish", icon: <FaFish />},
      {title: "Beef", icon: <GiMeat />},
      {title: "Bread", icon: <FaBreadSlice />}
    ]
  
  return (
    <div className='h-14 mx-2 md:mx-4 lg:mx-6 border-b'>
      <div className='flex justify-start gap-4 mt-2'>
        {sorting.map(item => (<Filter title={item.title} icon={item.icon}/>))}
      </div>
    </div>
  )
}
