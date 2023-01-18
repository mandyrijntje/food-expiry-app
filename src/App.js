import './App.css';
import Banner from './Banner.js';
import FilterBar from './FilterBar.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import PostList from './PostList.js';
import RentalList from './RentalList.js';
import ReviewList from './ReviewList.js';



function App() {
  return (
    <main>
      <Navbar />
      <FilterBar />
      <Banner />
      <RentalList />
      <ReviewList />
      <PostList />
      <Footer />
    </main>
  );
}

export default App;
