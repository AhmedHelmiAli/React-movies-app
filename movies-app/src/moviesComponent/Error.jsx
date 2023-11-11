import { Box, Typography } from "@mui/material";
const ErrorMessage = ({ message }) => {
  return (
    <Box sx={{ width: "fit-content", margin: "0 auto" }}>
      <Typography sx={{ color: "#54d" }}>{message}</Typography>
    </Box>
  );
};
export default ErrorMessage;
