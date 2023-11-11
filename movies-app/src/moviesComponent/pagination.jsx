import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  setShownMovies,
  setMovies,
  setIsLoading,
  setError,
  setSearchInput,
}) {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(
    function () {
      async function getData() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=14bdd69ce887376edfafb09f23f78fe9&page=${page}`
          );
          if (!res.ok) {
            throw new Error("Something Went Wrong");
          }
          const data = await res.json();

          setShownMovies(data.results);
          setMovies(data.results);
          setSearchInput("");
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getData();
    },
    [page, setShownMovies, setMovies, setIsLoading, setError, setSearchInput]
  );

  return (
    <>
      <Typography py={2}>Page: {page}</Typography>
      <Box sx={{ width: "fit-content", margin: "0 auto", paddingY: 4 }}>
        <Stack spacing={2}>
          <Pagination count={500} page={page} onChange={handleChange} />
        </Stack>
      </Box>
    </>
  );
}
