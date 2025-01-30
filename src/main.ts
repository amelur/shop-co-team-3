import './styles/base.css';
import router from './router';
import { createHeader } from './components/header';
// import { renderForm } from './components/form';
import { createFooter } from './components/footer';
// import { renderFilters } from './components/FilterForm';
// import { renderProductDetail } from './components/addToCart/addToCart';
// import { createCheckoutForm } from './components/checkoutForm';

document.addEventListener('DOMContentLoaded', () => {
  createHeader();
  router.resolve();
  createFooter();
});
