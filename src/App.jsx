import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>    
  );
}

export default App;