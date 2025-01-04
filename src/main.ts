import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { renderForm } from './components/form';

import { createCheckoutForm } from './components/checkoutForm'

createHeader();
renderHero();
createBrandSection();
renderForm();

// Создать и отобразить секцию Checkout
// const checkOut=createCheckoutForm();
// document.append(checkOut);
