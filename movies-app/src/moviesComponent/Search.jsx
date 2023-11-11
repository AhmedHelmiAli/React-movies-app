import { TextField, InputAdornment } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

const Search = ({ setShownMovies, movies, searchInput, setSearchInput }) => {
  // const [searchInput, setSearchInput] = useState("");
  const inputEl = useRef(null);

  useEffect(
    function () {
      let timer = setTimeout(
        () =>
          fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${searchInput}`
          )
            .then((data) => data.json())
            .then((data) => {
              if (searchInput.length === 0) {
                setShownMovies(movies);
              } else {
                setShownMovies(data.results);
              }
            }),
        3000
      );
      return () => {
        clearTimeout(timer);
      };
    },
    [searchInput, movies, setShownMovies]
  );

  useEffect(function () {
    inputEl.current.focus();
  }, []);
  return (
    <Grid item xs={12}>
      <Item>
        <TextField
          sx={{ width: "90%", height: "40px" }}
          id="outlined-basic"
          placeholder="Find movies tv shows documentary and more..."
          variant="standard"
          value={searchInput}
          inputRef={inputEl}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          InputProps={{
            disableUnderline: true,
            width: "100%",
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
        />
      </Item>
    </Grid>
  );
};
export default Search;
