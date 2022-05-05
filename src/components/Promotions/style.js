import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const PromotionContainer = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "50px",
  marginBottom: theme.spacing(2),
  backgroundColor: "#1A2027",
  color: "whitesmoke",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));
