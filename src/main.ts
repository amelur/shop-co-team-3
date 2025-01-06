import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { getCategoriesList } from './components/categories';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
import { renderFilters } from './components/FilterForm';
import { renderProduct } from './components/addToCart/addToCart';


createHeader();
renderHero();
createBrandSection();
getCategoriesList();
renderForm();
createFooter();
renderFilters();
renderProduct();




