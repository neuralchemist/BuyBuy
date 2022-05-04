import { styled } from "@mui/material/styles";
// import Box from "@mui/system/Box";
import Paper from "@mui/material/Paper";

export const BannerPaper = styled(Paper)(({ theme, image }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.grey[900],
  marginBottom: "24px",
  backgroundSize: "null",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  [theme.breakpoints.down("sm")]: {
    backgroundImage: null,
  },
  [theme.breakpoints.up("sm")]: {
    backgroundImage: `url(${image})`,
    height: "250px",
  },
}));
