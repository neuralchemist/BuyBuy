// mui 5
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export const CardContainer = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  minWidth: "250px",
  height: "420px",
  backgroundColor: "#525252",
  borderLeft: "3px solid #232323",
  transform: "scale(1, 1)",
  transition: "transform .5s ease",
  ":hover": {
    transform: "scale(1.05,1.05)",
  },
}));

export const PokemonCardContent = styled(CardContent)(({ theme }) => ({
  height: "180px",
  backgroundColor: "#232323",
}));

export const AddToCartButton = styled(IconButton)(({ theme }) => ({
  transition: "transform .4s ease",
  cursor: "pointer",
  color: "#fff",
  ":hover": {
    transform: "scale(1.2,1.2)",
    color: theme.palette.primary.light,
  },
}));

export const PokemonContent = styled(Box)(({ theme }) => ({
  marginBottom: 2,
  display: "flex",
  flexDirection: "column",
}));
