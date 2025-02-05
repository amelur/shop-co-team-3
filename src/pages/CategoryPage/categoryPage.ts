import { renderFilters } from "../../components/filter/FilterForm";
import { initFilterFunctionality } from "../../components/filter/FilterRange";
import { fetchAndRenderCategory } from "../../components/categoryCards/categoryCards";

export async function renderCategoryPage(category: string): Promise<HTMLElement> {

  const sectionCategory = document.createElement("section");
  sectionCategory.className = "category__page";
  sectionCategory.innerHTML = renderFilters();

  const categoryContent = await fetchAndRenderCategory(category);
  sectionCategory.appendChild(categoryContent);

setTimeout(()=>{initFilterFunctionality()},1);

return sectionCategory;


}

