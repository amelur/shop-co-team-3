import '../styles/categories.css';
// Массив строк, содержащий названия категорий, которые будут отображены в виде карточек
// export const categories = [
//   "Smartphones",
//   "Laptops",
//   "Fragrances",
//   "Skincare",
//   "Groceries",
//   "Home Decoration",
//   "Furniture",
//   "Tops",
//   "Womens Dresses",
//   "Womens Shoes",
//   "Mens Shirts",
//   "Mens Shoes",
// ];

export async function getCategoriesList(): Promise<void> {
  try {
    const res = await fetch('https://dummyjson.com/products/category-list');
    if (!res.ok) {
      throw new Error('Ошибка загрузки данных категорий');
    }
    const data = await res.json();
    createSection(data);
  } catch (error) {
    console.error('Ошибка при получении категорий:', error);
  }
}

// Функция для создания одной карточки категории
function createCard(stringData) {
  // Создаём HTML-элемент <div>, который будет представлять карточку
  const card = document.createElement('div');

  // Присваиваем созданной карточке CSS-класс "categories__card"
  // Этот класс должен быть описан в вашем CSS и управляет стилями карточки
  card.className = 'categories__card';

  // Устанавливаем текстовое содержимое карточки равным переданному параметру stringData (название категории)
  card.textContent = stringData;

  // Возвращаем готовый элемент карточки
  return card;
}

// Функция для создания и отображения секции с карточками категорий
export function createSection(data) {
  // Создаём HTML-элемент <div>, который будет контейнером для карточек
  const container = document.createElement('div');

  // Присваиваем контейнеру CSS-класс "categories__container", чтобы управлять стилями контейнера
  container.className = 'categories__container';

  // Перебираем массив категорий (data) и для каждой категории:
  // - Создаём карточку с помощью функции createCard
  // - Добавляем созданную карточку в контейнер
  data.forEach((item) => container.append(createCard(item)));

  // Создаём HTML-элемент <section>, который будет содержать заголовок и контейнер карточек
  const section = document.createElement('section');

  // Присваиваем секции CSS-класс "categories", чтобы задать стили для этой секции
  section.className = 'categories';
  section.id = 'categories';

  // Создаём HTML-элемент <h2>, который будет заголовком секции
  const title = document.createElement('h2');

  // Присваиваем заголовку CSS-класс "categories__title" для стилизации
  title.className = 'categories__title';

  // Устанавливаем текст заголовка равным "Categories"
  title.textContent = 'Categories';

  // Добавляем заголовок и контейнер с карточками внутрь секции
  section.append(title, container);

  //const brand = document.querySelector('.homePage_brandSection') as HTMLElement;
  // Добавляем готовую секцию в конец <body> текущего документа
  //insertAdjacentElement('afterend', section);
  return section;
}

// Вызываем функцию createSection с массивом категорий (categories), чтобы отобразить их на странице

// // categories.ts
// // import '../styles/catigories';
// // import '../styles/'

//   const categories: string[] = [
//     "Smartphones",
//     "Laptops",
//     'Fragrances',
//     'Skincare',
//     "Groceries",
//     "Home decoration",
//     "Furniture",
//     "Tops",
//     "Womens dresses",
//     "Womens shoes",
//     "Mens shirts",
//     "Mens shoes",
//   ];

// function createCard(stringData:string):HTMLDivElement{
//     const card=document.createElement("div");
//     card.className="categories__card";
//     card.textContent=stringData;
//     return card;
// }

// export function createSection(data:string[]):void{
//   const title=`<h2 class="categories__title">Categories</h2>`;
//   const container= document.createElement("div");
//   container.className="categories__container";

//   data.forEach(item => container.append(createCard(item)));
//   const section=document.createElement("section");
//   section.className="categories";

//   section.innerHTML=title;

//   section.append(container);
//   document.body.append(section);
// }

// createSection(categories);

// //   function createCategoryCard(category: Category): string {
// //     return `
// //       <div class="category-card">
// //         <img src="${category.image}" alt="${category.name}" class="category-image" />
// //         <p class="category-name">${category.name}</p>
// //       </div>
// //     `;
// //   }

// //   function renderCategories(categories: Category[]): void {
// //     const container = document.getElementById('categories-container') as HTMLElement;
// //     if (container) {
// //       container.innerHTML = categories.map(createCategoryCard).join('');

// // }
// // document.body.append(container)
// //   }

// //   document.addEventListener('DOMContentLoaded', () => {
// //     renderCategories(categories);

// //   });
