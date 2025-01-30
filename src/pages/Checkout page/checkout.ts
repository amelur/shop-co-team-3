// Link to page is http://localhost:5173/src/pages/Checkout%20page/checkout.html

import { createHeader } from '../../components/header';
import { createFooter } from '../../components/footer';
import { createCheckoutForm } from '../../components/checkoutForm';
import '../../styles/checkout.css';

// createHeader();

const checkOut = createCheckoutForm();
document.body.append(checkOut);

// createFooter();