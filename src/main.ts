import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
// здесь фильтер для след.страницы
import { renderFilters } from './components/FilterForm';


import { createCheckoutForm } from './components/checkoutForm'

createHeader();
renderHero();
createBrandSection();
renderForm();
createFooter();
renderFilters();

// Создать и отобразить секцию Checkout
// const checkOut=createCheckoutForm();
// document.append(checkOut);