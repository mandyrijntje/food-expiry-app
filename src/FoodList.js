import React from 'react';
import FoodItem from './FoodItem';
import watermelon from './assets/foodList/watermelon';
import apple from './assets/foodList/apple';
import orange from './assets/foodList/orange';
import pear from './assets/foodList/pear';
import avocado from './assets/foodList/avocado';
import coconut from './assets/foodList/coconut';
import banana from './assets/foodList/banana';
import peach from './assets/foodList/peach';
import melon from './assets/foodList/melon';

export default function FoodList() {

  const date = new Date();

  const dateCurrent = date.toLocaleDateString('en-NL', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
  
  const expiry = new Date(date.setDate(date.getDate()+ 9)).toLocaleDateString('en-NL', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});;

  const dateExpiry = expiry


  const foodItems = 
    [{title:'Apple', image: apple, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque sodales diam tempus laoreet'},
    {title:'Avocado', image: avocado, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Lorem ipsum dolor sit consectetur adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {title:'Banana', image: banana, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Lorem ipsum dolor sit amer adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {title:'Coconut', image: coconut, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 1, description: 'Usce sed rutrum metusam id sodales dui.'},
    {title:'Melon', image: melon, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Aenean et cursus dui et moleed laoreet suscipit ipsum et aliquet'},
    {title:'Orange', image: orange, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Duis in rutrum duiroin sit amet leo lectus'},
    {title:'Peach', image: peach, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 2, description: 'Quisque sodales nulla quis diam tempus laoree'},
    {title:'Pear', image: pear, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit ame duis in sit amet leo lectus'},
    {title:'Watermelon', image: watermelon, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'}]

  return (
    <div className='foodlist pt-3'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {foodItems.map((item) => {
          const descriptionShort = item.description.substring(0,50)+'...';
          console.log(descriptionShort);
          return (
          <FoodItem title={item.title} image={item.image} purchasedate = {item.purchaseDate} expirydate = {item.expiryDate} rating={item.rating} description={descriptionShort}/>)})}
      </div>
    </div>
  )
}
