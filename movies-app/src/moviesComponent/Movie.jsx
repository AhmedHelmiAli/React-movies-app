import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMovie } from "../redux/WatchListSlice";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import myImg from "./default.jpg";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Movie = ({ movie, isLoading }) => {
  const watchList = useSelector((store) => store.WatchListReducer.value);
  const dispatch = useDispatch();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Item>
        <Card sx={{ position: "relative" }}>
          <CardActionArea>
            <Link to={`./movie-details/${movie.id}`} className="link">
              <CardMedia
                component="img"
                image={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path
                    : myImg
                }
                alt="green iguana"
                className="image"
              />
            </Link>
            <CardContent sx={{ padding: 1 }}>
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={1.2}
              >
                <Link to={`./movie-details/${movie.id}`} className="link">
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{
                      height: "10px",
                      lineHeight: 1,
                    }}
                    fontWeight={"bold"}
                    fontSize={"0.9rem"}
                  >
                    {movie?.title ||
                      movie?.original_name ||
                      movie.original_title}
                  </Typography>
                </Link>

                <Box
                  onClick={() => {
                    dispatch(toggleMovie(movie));
                  }}
                >
                  {watchList?.find((mov) => mov.id === movie?.id) ? (
                    <FavoriteIcon
                      sx={{
                        fontSize: "2.2rem",
                        color: "#FBD341",
                      }}
                    ></FavoriteIcon>
                  ) : (
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: "2.2rem",
                        color: "#FBD341",
                      }}
                    ></FavoriteBorderIcon>
                  )}
                </Box>
              </Stack>
            </CardContent>

            <Stack spacing={1} p={1} pt={0}>
              <Rating
                name="half-rating-read"
                defaultValue={movie.vote_average / 2 || 3}
                precision={0.1}
                readOnly
              />
            </Stack>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
};
export default Movie;
