// import './styles/base.css';
// import router from './router';
// import { createHeader } from './components/heeder/header';
// // import { renderForm } from './components/form';
// import { createFooter } from './components/footer/footer';

// // import { createCheckoutForm } from './components/checkoutForm';

// document.addEventListener('DOMContentLoaded', () => {
//   createHeader();
//   router.resolve();
//   createFooter();
// });


// import { createPaymentForm } from './components/payment/payment';

// const paymentForm = createPaymentForm();
// document.body.append(paymentForm);


import { createHeader } from './components/heeder/header';
import { createPaymentForm } from './components/payment/payment';
import { createFooter } from './components/footer/footer';
import { renderForm } from './components/footer/form';



createHeader();

const payment = createPaymentForm();
document.body.append(payment);

createFooter();