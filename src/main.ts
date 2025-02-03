import './styles/base.css';
import router from './router';
import { createHeader } from './components/heeder/header';
// import { renderForm } from './components/form';
import { createFooter } from './components/footer/footer';

// import { createCheckoutForm } from './components/checkoutForm';

document.addEventListener('DOMContentLoaded', () => {
  createHeader();
  router.resolve();
  createFooter();
});
