// mui 5
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const MarqueeContainer = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "100%",
  overflowX: "hidden",
}));

export const Marquee = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  width: "150%",
  height: "100%",
  animation: "scroll 20s linear infinite",
  // hover
  ":hover": {
    animationPlayState: "paused",
  },
  // keyframe

  "@keyframes scroll": {
    from: {
      transform: "translateX(10%)",
    },
    to: {
      transform: "translateX(-100%)",
    },
  },
}));
