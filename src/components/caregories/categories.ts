import './categories.css';

export async function getCategoriesList(): Promise<string | void> {
  try {
    const res = await fetch('https://dummyjson.com/products/category-list');
    if (!res.ok) {
      throw new Error('Ошибка загрузки данных категорий');
    }
    const data: string[] = await res.json();
    return createCategoriesSection(data);
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
  }
}

function createCard(category: string): HTMLDivElement {
  const card = document.createElement('div');
  card.className = 'categories__card';
  card.textContent = category;
  return card;
}

export function createCategoriesSection(categories: string[]): string {
  const container = document.createElement('div');
  container.className = 'categories__container';

  categories.forEach((category) => container.appendChild(createCard(category)));

  const section = document.createElement('section');
  section.className = 'categories';
  section.id = 'categories';

  const title = document.createElement('h2');
  title.className = 'categories__title';
  title.textContent = 'Categories';

  section.append(title, container);

  return section.outerHTML;
}
