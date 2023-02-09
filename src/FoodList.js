import React from 'react';
import FoodItem from './FoodItem';
import watermelon from './assets/foodList/watermelon.jpg';
import apple from './assets/foodList/apple.jpg';
import orange from './assets/foodList/orange.jpg';
import pear from './assets/foodList/pear.jpg';
import avocado from './assets/foodList/avocado.jpg';
import coconut from './assets/foodList/coconut.jpg';
import banana from './assets/foodList/banana.jpg';
import peach from './assets/foodList/peach.jpg';
import melon from './assets/foodList/melon.jpg';

export default function FoodList(props) {

  

  const date = new Date();

  const dateCurrent = date.toLocaleDateString('en-NL', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});
  
  const expiry = new Date(date.setDate(date.getDate()+ 9)).toLocaleDateString('en-NL', {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'});;

  const dateExpiry = expiry


  const foodItems = 
    [{category:'Fruits', title:'Apple', image: apple, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque sodales diam tempus laoreet'},
    {category:'Fruits', title:'Avocado', image: avocado, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Lorem ipsum dolor sit consectetur adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {category:'Fruits', title:'Banana', image: banana, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Lorem ipsum dolor sit amer adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {category:'Fruits', title:'Coconut', image: coconut, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 1, description: 'Usce sed rutrum metusam id sodales dui.'},
    {category:'Fruits', title:'Melon', image: melon, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Aenean et cursus dui et moleed laoreet suscipit ipsum et aliquet'},
    {category:'Fruits', title:'Orange', image: orange, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Duis in rutrum duiroin sit amet leo lectus'},
    {category:'Fruits', title:'Peach', image: peach, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 2, description: 'Quisque sodales nulla quis diam tempus laoree'},
    {category:'Fruits', title:'Pear', image: pear, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit ame duis in sit amet leo lectus'},
    {category:'Vegetables', title:'Veg1', image: apple, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque sodales diam tempus laoreet'},
    {category:'Vegetables', title:'Veg2', image: avocado, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Lorem ipsum dolor sit consectetur adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {category:'Seafood', title:'Fish1', image: banana, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Lorem ipsum dolor sit amer adipiscing elit quisque sodales nulla quis diam tempus laoreet'},
    {category:'Seafood', title:'Fish2', image: coconut, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 1, description: 'Usce sed rutrum metusam id sodales dui.'},
    {category:'Meat', title:'Chicken', image: melon, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 3, description: 'Aenean et cursus dui et moleed laoreet suscipit ipsum et aliquet'},
    {category:'Meat', title:'Beef', image: orange, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Duis in rutrum duiroin sit amet leo lectus'},
    {category:'Carbs', title:'Bread', image: peach, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 2, description: 'Quisque sodales nulla quis diam tempus laoree'},
    {category:'Carbs', title:'Rice', image: pear, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 4, description: 'Lorem ipsum dolor sit ame duis in sit amet leo lectus'},
    {category:'Fruits', title:'Watermelon', image: watermelon, purchaseDate: dateCurrent, expiryDate:dateExpiry, rating: 5, description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'}]

    const filteredItems = props.category === ''? foodItems : foodItems.filter(item => item.category === props.category); 

    

  return (
    <div className={'foodlist pt-3'}{...props}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        
        {filteredItems.map((item, key) => {
          const descriptionShort = item.description.substring(0,50)+'...';
          return (
          <FoodItem key={key} title={item.title} image={item.image} purchasedate = {item.purchaseDate} expirydate = {item.expiryDate} rating={item.rating} description={descriptionShort}/>)})}
      </div>
    </div>
  )
}
