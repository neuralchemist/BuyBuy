// mui 5
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// custom context
import { useCart } from "../../context/CartContext";

function Review() {
  const { cart } = useCart();

  return (
    <Box mt={3}>
      <Typography variant="h6">Order Summary</Typography>
      <List disablePadding>
        {cart.items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">{`$${
              item.price * item.quantity
            }`}</Typography>
          </ListItem>
        ))}

        <ListItem>
          <ListItemText primary="Total" sx={{fontWeight: "700"}} />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "700" }}
          >{`$${cart.subtotal}`}</Typography>
        </ListItem>
      </List>
    </Box>
  );
}

export default Review;
