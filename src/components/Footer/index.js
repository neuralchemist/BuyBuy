// mui 5
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// custom style

const hoverStyle = {
  transition: "transform .4s ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1,1.1)",
    color: "brown",
  },
};

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography variant="subtitle1" color="text.secondary" component="p">
        BuyBuy gmb
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
        <InstagramIcon sx={hoverStyle} />
        <TwitterIcon sx={hoverStyle} />
      </Box>
    </Box>
  );
}

export default Footer;
