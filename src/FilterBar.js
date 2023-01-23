import React from 'react';
import Filter from './Filter';
// import { FaAppleAlt, FaFish, FaBreadSlice } from 'react-icons/fa';
import { FaAppleAlt, FaBreadSlice, FaFish } from 'react-icons/fa';
// import { GiBananaPeeled, GiGrapes, GiOrangeSlice, GiTomato, GiPotato, GiRoastChicken, GiMeat } from 'react-icons/gi';

import { GiGarlic, GiRoastChicken } from 'react-icons/gi';

export default function FilterBar() {

  const sorting = [
      {title: "Fruits", icon: <FaAppleAlt />},
//  {title: "Fruits", icon: <GiBananaPeeled />},
      // {title: "Grape", icon: <GiGrapes />},
      {title: "Vegetables", icon: <GiGarlic />},
      {title: "Carbs", icon: <FaBreadSlice />},
      // {title: "Tomato", icon: <GiTomato />},
   //   {title: "Potato", icon: <GiPotato />},
      {title: "Seafood", icon: <FaFish />},
     // {title: "Fish", icon: <FaFish />},
      {title: "Meat", icon: <GiRoastChicken />}
    ]
  
  return (
      <div className='flex justify-start gap-3 mt-2 border-b h-14 px-2 sm:px-5'>
        {sorting.map(item => (<Filter title={item.title} icon={item.icon}/>))}
      </div>
  )
}
