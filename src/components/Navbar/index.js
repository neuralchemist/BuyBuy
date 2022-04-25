// mui5
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Box from "@mui/system/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
// react router
import { Link } from "react-router-dom";
// custom context
import { useCart } from "../../context/CartContext";
// custom routes
import { CART, HOME } from "../../utils/routes";

// custom style

const hoverStyle = {
  transition: "transform .4s ease",
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1,1.1)",
    color: "brown",
  },
};

function Navbar() {
  const { cart } = useCart();

  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={0}
      sx={{
        top: 0,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
          }}
        >
          <IconButton
            sx={hoverStyle}
            aria-label="brand icon"
            color="inherit"
            component={Link}
            to={HOME}
          >
            <StorefrontIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ pl: 1, textDecoration: "none" }}
          >
            BuyBuy
          </Typography>
        </Box>
        <Box component="nav">
          {/* cart */}
          <IconButton
            sx={hoverStyle}
            aria-label="Show cart items"
            color="inherit"
            component={Link}
            to={CART}
          >
            <Badge
              badgeContent={cart.total_items || "0"}
              color="secondary"
              test-id="nav-cart-badge"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
