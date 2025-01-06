import { createHeader } from '../components/header';
import { fetchAndRenderCategory } from '../components/categoryCards/categoryCards';
import { renderFilters } from '../components/FilterForm';
import { createFooter } from '../components/footer';

createHeader();
fetchAndRenderCategory('groceries');
renderFilters();
createFooter();