import { createHeader } from '../../components/header';

import { renderFilters } from '../../components/FilterForm';
import { initFilterFunctionality } from '../../components/FilterRange';
import { fetchAndRenderCategory } from '../../components/categoryCards/categoryCards';

import { createFooter } from '../../components/footer';

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

const app = document.getElementById('app') as HTMLElement;

async function initializePage(): Promise<void> {
  //   createHeader();

  app.innerHTML = renderFilters();
  initFilterFunctionality();

  const categorySection = await fetchAndRenderCategory(category as string);
  app.append(categorySection);

  //   createFooter();
}

initializePage();
