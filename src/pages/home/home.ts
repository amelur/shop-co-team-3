import { sectionHero } from '../../components/hero/hero';
import { createBrandSection } from '../../components/brandsSection';
import { getCategoriesList } from '../../components/categories';
import { cardHandler } from '../../utils/DevHelper';

export async function renderHomePage(): Promise<void> {
  const app = document.getElementById('app') as HTMLElement;
  app.innerHTML += sectionHero();
  app.innerHTML += createBrandSection();
  app.innerHTML += await getCategoriesList();
  cardHandler();
}
