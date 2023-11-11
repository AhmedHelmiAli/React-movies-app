import * as React from "react";
import Stack from "@mui/material/Stack";
// import CircularProgress from "@mui/material/CircularProgress";
// import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function CircularDeterminate() {
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 0 : prevProgress + 10
  //     );
  //   }, 800);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    // <Stack
    //   spacing={2}
    //   direction="row"
    //   justifyContent={"center"}
    //   height={"100vh"}
    // >
    //   <CircularProgress variant="determinate" value={progress} />
    // </Stack>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Item>
        <Card sx={{ position: "relative" }}>
          {/* <CardActionArea> */}
          {/* <Link to={`./movie-details/${movie.id}`} className="link"> */}
          <CardMedia
            // component="img"
            // image={
            //   movie.poster_path
            //     ? "https://image.tmdb.org/t/p/w500" + movie?.poster_path
            //     : myImg
            // }
            // alt="green iguana"
            className="image"
          >
            <Skeleton variant="rounded" width="100%" height="100%" />
          </CardMedia>
          {/* </Link> */}
          <CardContent sx={{ padding: 1 }}>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={1.2}
            >
              {/* <Link to={`./movie-details/${movie.id}`} className="link"> */}
              <Typography
                gutterBottom
                // variant="h6"
                // component="h3"
                // sx={{
                //   height: "10px",
                //   lineHeight: 1,
                // }}
                // fontWeight={"bold"}
                // fontSize={"0.9rem"}
              >
                {/* {movie?.title ||
                      movie?.original_name ||
                      movie.original_title} */}
                <Skeleton width="200px" height={20} />
              </Typography>
              {/* </Link> */}

              <Box
              // onClick={() => {
              //   dispatch(toggleMovie(movie));
              // }}
              >
                {/* {watchList?.find((mov) => mov.id === movie?.id) ? (
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
                  )} */}
                <Skeleton variant="circular" width={30} height={30} />
              </Box>
            </Stack>
          </CardContent>

          <Stack spacing={1} p={1} pt={0}>
            {/* <Rating
                name="half-rating-read"
                defaultValue={movie.vote_average / 2 || 3}
                precision={0.1}
                readOnly
              /> */}
            <Skeleton variant="rectangular" width="200px" height={20} />
          </Stack>
          {/* </CardActionArea> */}
        </Card>
      </Item>
    </Grid>
  );
}
