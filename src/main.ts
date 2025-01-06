import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { getCategoriesList } from './components/categories';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
import { fetchAndRenderCategory } from './components/categoryCards/categoryCards';
import { renderFilters } from './components/FilterForm';
import { renderProduct } from './components/addToCart/addToCart';
import { createCheckoutForm } from './components/checkoutForm'

createHeader();
renderHero();
createBrandSection();
getCategoriesList();
renderForm();
createFooter();
renderFilters();
fetchAndRenderCategory('groceries');
renderProduct();

// Создать и отобразить секцию Checkout
const checkOut=createCheckoutForm();
document.append(checkOut);

