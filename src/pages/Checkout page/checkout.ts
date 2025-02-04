// Link to page is http://localhost:5173/src/pages/Checkout%20page/checkout.html

import { createHeader } from '../../components/heeder/header';
import { createFooter } from '../../components/footer/footer';
import { createCheckoutForm } from '../../components/checkout/checkoutForm';
import '../../components/checkout/checkout.css';

createHeader();

const checkOut = await createCheckoutForm(5);
document.body.append(checkOut);

createFooter();