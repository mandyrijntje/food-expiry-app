import './App.css';
import Banner from './Banner.js';
import FilterBar from './FilterBar.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import PostList from './PostList.js';
import FoodList from './FoodList.js';
import ReviewList from './ReviewList.js';
 import { useState } from 'react';



function App() {

   const [data, setData] = useState('');

  const passCategoryToSortFoodList = (childdata) => {
     setData(childdata);
  }

  return (
    <main>
      <Navbar />
      <Banner />
      <FilterBar passcategory={passCategoryToSortFoodList}/>
      {/* {data} */}
      <div className='px-3 mx-2 md:mx-4 lg:mx-6'>
        <FoodList category={data}/>
        <ReviewList />
        <PostList />
        <Footer />
      </div>
    </main>
  );
}

export default App;
