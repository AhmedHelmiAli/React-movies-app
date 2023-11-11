import { useState } from "react";
import Movie from "./Movie";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Search from "./Search";
import PaginationControlled from "./pagination";
import Loading from "./Loading";
import ErrorMessage from "./Error";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [shownMovies, setShownMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          px={1}
          py={2}
          sx={{
            backgroundColor: "#E6E6E6",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search
            movies={movies}
            setShownMovies={setShownMovies}
            setSearchInput={setSearchInput}
            searchInput={searchInput}
          />
        </Grid>
        <Box pb={4}>
          <Typography my={6} variant="h5" sx={{ fontWeight: "bold" }}>
            Latest Movies And TV Shows
          </Typography>
          {error && <ErrorMessage message={error} />}

          {!isLoading && !error && (
            <Grid container spacing={2}>
              {shownMovies.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </Grid>
          )}
          {isLoading && (
            <Grid container spacing={2}>
              {Array.from(new Array(20)).map((m) => (
                <Loading key={crypto.randomUUID()} />
              ))}
            </Grid>
          )}
          {/* {isLoading && <Loading />} */}
          <PaginationControlled
            setMovies={setMovies}
            setShownMovies={setShownMovies}
            setIsLoading={setIsLoading}
            setError={setError}
            setSearchInput={setSearchInput}
          />
        </Box>
      </Container>
    </>
  );
};
export default Movies;
