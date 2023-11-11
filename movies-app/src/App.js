import "./App.css";
import MovieDetails from "./moviesComponent/MovieDetails";
import Movies from "./moviesComponent/Movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbarComponent/Navbar";
import WatchList from "./moviesComponent/WatchList";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
          <Route path="/WatchList" element={<WatchList />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
