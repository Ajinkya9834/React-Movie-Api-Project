
import Hero from './Hero';
import Header from './header/Header';
import Trending from './TrendingMovie';
import PopularMovies from './PopularMovies';
import LatestTrailers from './LatestTrailers';
import Footer from './Footer';


function Home() {
  return (
    <div className=" text-white min-h-screen">
      <Header />
      <main>
        <Hero/>
        <Trending />
        <LatestTrailers/>
        <PopularMovies />
      </main>
      <Footer/>
    </div>
  )
}

export default Home