import React from 'react';
import Filter from './Filter';
// import { FaAppleAlt, FaFish, FaBreadSlice } from 'react-icons/fa';
import { FaAppleAlt, FaFish } from 'react-icons/fa';
// import { GiBananaPeeled, GiGrapes, GiOrangeSlice, GiTomato, GiPotato, GiRoastChicken, GiMeat } from 'react-icons/gi';

import { GiGarlic, GiRoastChicken, GiMeat } from 'react-icons/gi';

export default function FilterBar() {

  const sorting = [
      {title: "Fruits", icon: <FaAppleAlt />},
//  {title: "Fruits", icon: <GiBananaPeeled />},
      // {title: "Grape", icon: <GiGrapes />},
      {title: "Vegetables", icon: <GiGarlic />},
      // {title: "Tomato", icon: <GiTomato />},
   //   {title: "Potato", icon: <GiPotato />},
      {title: "Seafood", icon: <FaFish />},
     // {title: "Fish", icon: <FaFish />},
      {title: "Red meat", icon: <GiMeat />},
      {title: "White meat", icon: <GiRoastChicken />}
    ]
  
  return (
      <div className='flex justify-center gap-3 mt-2 border-b h-14'>
        {sorting.map(item => (<Filter title={item.title} icon={item.icon}/>))}
      </div>
  )
}
