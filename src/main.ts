import { createHeader } from './components/header';
import { renderHero } from './components/hero/hero';
import { createBrandSection } from './components/brandsSection';
import { renderForm } from './components/form';
import { createFooter } from './components/footer';
import { fetchAndRenderCategory } from './components/categoryCards/categoryCards';
// здесь фильтер для след.страницы
import { renderFilters } from './components/FilterForm';

createHeader();
renderHero();
createBrandSection();
renderForm();
createFooter();
renderFilters();
fetchAndRenderCategory('groceries');
