import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { getCategoriesList } from './components/categories';
import { cardHandler } from './utils/DevHelper';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
import { renderFilters } from './components/FilterForm';
import { renderProduct } from './components/addToCart/addToCart';
import { createCheckoutForm } from './components/checkoutForm';

async function initializePage(): Promise<void> {
  createHeader();
  renderHero();
  createBrandSection();
  await getCategoriesList();
  renderForm();
  createFooter();
  renderFilters();
  renderProduct();
  cardHandler();
}
initializePage();

// Создать и отобразить секцию Checkout
const checkOut = createCheckoutForm();
document.body.append(checkOut);
