import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import myImg from "./default.jpg";
import "../App.css";
import { Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleMovie } from "../redux/WatchListSlice";
import Button from "@mui/material/Button";

const MovieDetails = () => {
  const { id, media_type } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const watchList = useSelector((store) => store.WatchListReducer.value);
  const dispatch = useDispatch();

  useEffect(
    function () {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
      )
        .then((data) => data.json())
        .then((data) => {
          setMovieDetails(data);

          document.title = movieDetails?.title
            ? movieDetails?.title
            : "usePopCorn";
        });
      return () => {
        document.title = "usePopCorn";
      };
    },
    [id, media_type, movieDetails?.title]
  );
  return (
    <Box sx={{ paddingBottom: "100px" }}>
      <div className="mainImg">
        <img
          src={
            movieDetails?.backdrop_path
              ? "https://image.tmdb.org/t/p/w500" + movieDetails?.backdrop_path
              : myImg
          }
          alt=""
        ></img>

        <img
          src={
            movieDetails?.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movieDetails?.poster_path
              : myImg
          }
          alt=""
        ></img>
        <div className="hero-section" style={{ padding: "1rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {movieDetails?.release_date?.slice(0, 4) || 2010}
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", margin: "0.8rem 0" }}
            className="title"
          >
            {movieDetails?.title ||
              movieDetails?.original_title ||
              movieDetails?.original_name}
          </Typography>
          <Typography variant="p" sx={{ opacity: 0.6 }} className="overview">
            {movieDetails?.overview?.slice(0, 400)}...
          </Typography>
          <div className="additional-details">
            <PlayArrowIcon
              sx={{
                padding: "0.75rem",
                border: "1px solid #fff6",
                borderRadius: "50%",
              }}
            ></PlayArrowIcon>
            <span>WATCH THE TRAILER</span>
            <span className="pipe"></span>
            <span>{movieDetails?.release_date || 2010}</span>
            <span>
              {movieDetails.genres?.map((genre) => genre.name).join(",")}
            </span>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="movie-details">
          <div className="more-info">
            <Typography variant="span">
              <Typography
                variant="span"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  marginRight: "0.5rem",
                }}
              >
                {movieDetails?.vote_average?.toFixed(1)}
              </Typography>
              <Typography
                variant="span"
                sx={{ fontWeight: "bold", fontSize: "0.7rem" }}
              >
                IMDb
              </Typography>
            </Typography>
            <span className="black"></span>
            <div className="col">
              <span style={{ opacity: 0.6 }}>Status</span>
              <span>{movieDetails?.status}</span>
            </div>
          </div>
          <div>
            <Button
              onClick={() => {
                dispatch(toggleMovie(movieDetails));
              }}
            >
              <AddIcon
                sx={{
                  backgroundColor: "#000",
                  padding: "0.4rem",
                  color: "#fff",
                  marginRight: "0.5rem",

                  verticalAlign: "middle",
                }}
              ></AddIcon>
            </Button>
            <Button>
              {watchList?.find((mov) => mov.id === movieDetails?.id) ? (
                <FavoriteIcon
                  sx={{
                    fontSize: "2.2rem",
                    color: "#000",
                  }}
                ></FavoriteIcon>
              ) : (
                <FavoriteBorderIcon
                  sx={{
                    fontSize: "2.2rem",
                    color: "#000",
                  }}
                ></FavoriteBorderIcon>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MovieDetails;
// adult
// :
// false
// backdrop_path
// :
// "/4DpVWbDmYanToTTkTp2SQLQX1p4.jpg"
// belongs_to_collection
// :
// {id: 12263, name: 'The Exorcist Collection', poster_path: '/uPTu5kroKS6lHm6TKncIzVgwW2o.jpg', backdrop_path: '/tuORKw8hnP7Gd03BdBV6TmySR2G.jpg'}
// budget
// :
// 30000000
// genres
// :
// [{…}]
// homepage
// :
// "https://www.theexorcistbeliever.movie"
// id
// :
// 807172
// imdb_id
// :
// "tt12921446"
// original_language
// :
// "en"
// original_title
// :
// "The Exorcist: Believer"
// overview
// :
// "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before."
// popularity
// :
// 502.673
// poster_path
// :
// "/so4zbf0riOFmKp3aIT7YZeglB3f.jpg"
// production_companies
// :
// (4) [{…}, {…}, {…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2023-10-04"
// revenue
// :
// 107561805
// runtime
// :
// 111
// spoken_languages
// :
//
// (2) [{…}, {…}]
// status
// :
// "Released"
// tagline
// :
// "Do you believe?"
// title
// :
// "The Exorcist: Believer"
// video
// :
// false
// vote_average
// :
// 5.393
// vote_count
// :
// 140
