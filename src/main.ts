import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { getCategoriesList } from './components/categories';
import { cardHandler } from './utils/DevHelper';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
import { renderFilters } from './components/FilterForm';
import { renderProductDetail } from './components/addToCart/addToCart';
import { createCheckoutForm } from './components/checkoutForm';

async function initializePage(): Promise<void> {
  createHeader();
  renderHero();
  createBrandSection();
  await getCategoriesList();
  renderForm();
  createFooter();
  renderFilters();
  renderProductDetail();
  cardHandler();
}
initializePage();

// Создать и отобразить секцию Checkout
const checkOut = createCheckoutForm();
document.body.append(checkOut);

