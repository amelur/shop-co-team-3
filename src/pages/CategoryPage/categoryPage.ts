import { renderFilters } from '../../components/FilterForm';
import { initFilterFunctionality } from '../../components/FilterRange';
import { fetchAndRenderCategory } from '../../components/categoryCards/categoryCards';

export async function renderCategoryPage(
  category: string,
): Promise<HTMLElement> {
  const sectionCategory = document.createElement('section');
  sectionCategory.className = 'category__page';
  sectionCategory.innerHTML += renderFilters();

  sectionCategory.append(await fetchAndRenderCategory(category));
  setTimeout(() => {
    initFilterFunctionality();
  }, 0);
  return sectionCategory;
}
