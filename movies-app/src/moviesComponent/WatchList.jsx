import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Stack, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { toggleMovie } from "../redux/WatchListSlice";
import myImg from "../../src/moviesComponent/default.jpg";

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 30 }} />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 30 }} />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 30 }} />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const WatchList = () => {
  const watchList = useSelector((store) => store.WatchListReducer.value);
  const dispatch = useDispatch();

  return (
    <Container sx={{ paddingY: 3 }}>
      <Grid container spacing={3}>
        {watchList?.map((mov) => (
          <Grid item xs={12} md={6} key={mov.id}>
            <Item>
              <Paper elevation={8} sx={{ borderRadius: 3 }}>
                <Stack spacing={1} direction={"row"}>
                  <img
                    className="watchlist-img"
                    src={
                      mov.poster_path
                        ? "https://image.tmdb.org/t/p/w500" + mov?.poster_path
                        : myImg
                    }
                    alt=""
                  />
                  <Box sx={{ paddingX: 1 }}>
                    <Stack
                      spacing={1}
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={1.2}
                    >
                      <Typography
                        sx={{
                          // height: 20,
                          lineHeight: 1.2,
                          fontWeight: "bold",
                          marginBottom: 1,
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                        }}
                      >
                        {mov?.title}
                      </Typography>
                      <Button
                        onClick={() => {
                          dispatch(toggleMovie(mov));
                        }}
                      >
                        <FavoriteIcon
                          sx={{
                            fontSize: "1.8rem",
                            color: "#451952",
                          }}
                        ></FavoriteIcon>
                      </Button>
                    </Stack>

                    <Typography
                      sx={{
                        marginBottom: 1,
                        opacity: 0.9,
                      }}
                    >
                      {mov?.genres?.map((genre) => genre?.name).join(" - ") ||
                        "Drama - Thriller"}
                    </Typography>
                    <Typography
                      sx={{
                        opacity: 0.7,
                        fontSize: "0.9rem",
                        marginBottom: 1,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 7,
                        textOverflow: "ellipsis",
                      }}
                    >
                      {mov.overview}
                    </Typography>
                    <StyledRating
                      name="highlight-selected-only"
                      defaultValue={Math.floor(mov?.vote_average / 2) || 3}
                      IconContainerComponent={IconContainer}
                      // getLabelText={(value) => customIcons[value].label}
                      highlightSelectedOnly
                      readOnly
                    />
                  </Box>
                </Stack>
              </Paper>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WatchList;
