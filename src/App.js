import './App.css';
import Banner from './Banner.js';
import FilterBar from './FilterBar.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import PostList from './PostList.js';
import FoodList from './FoodList.js';
import ReviewList from './ReviewList.js';



function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <div className='px-3 mx-2 md:mx-4 lg:mx-6'>
        <FilterBar />
        <FoodList />
        <ReviewList />
        <PostList />
        <Footer />
      </div>
    </main>
  );
}

export default App;
