// custom components
import Checkout from './Checkout';
// custom context
import { CheckoutProvider } from './context/CheckoutContext'

function CheckoutForm() {


  return (
    <CheckoutProvider>
      <Checkout />
    </CheckoutProvider>
  );
}

export default CheckoutForm;
