import './categoryCards.css';
import starImg from '../../assets/icons/star.svg';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  images: string[];
  category: string;
}

export async function fetchAndRenderCategory(
  property: string,
): Promise<HTMLElement> {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${property}`,
    );
    const data = await res.json();
    console.log(data.products);
    return renderCategorySection(data.products);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}

function calculateDiscountedPrice(price: number, discount: number): string {
  return (Math.round((price - (price * discount) / 100) * 100) / 100).toFixed(
    2,
  );
}

function createStarWrapper(width?: number): HTMLDivElement {
  const starWrapper = document.createElement('div');
  starWrapper.className = 'category__card-starWrapper';
  const star = document.createElement('img');
  star.className = 'category__card-star';
  star.src = starImg;
  if (width) {
    starWrapper.style.width = `${width}px`;
  }
  starWrapper.append(star);
  return starWrapper;
}

function createRating(ratingNumber: number): HTMLDivElement {
  const rating = document.createElement('div');
  rating.className = 'category__card-rating';

  const starsContainer = document.createElement('div');
  starsContainer.className = 'category__card-starsContainer';

  for (let i = 0; i < Math.floor(ratingNumber); i++) {
    starsContainer.append(createStarWrapper());
  }

  if (ratingNumber % 1 !== 0) {
    starsContainer.append(createStarWrapper((ratingNumber % 1) * 18.83));
  }

  const ratingWrapper = document.createElement('div');
  ratingWrapper.className = 'category__card-ratingNumber';
  ratingWrapper.innerHTML = `<p>${ratingNumber}/<span>5</span></p>`;

  rating.append(starsContainer, ratingWrapper);
  return rating;
}

function createCards(data: Product[]): HTMLDivElement {
  const categoryCards = document.createElement('div');
  categoryCards.className = 'category__cards';

  const fragment = document.createDocumentFragment();
  data.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'category__card';

    const img = document.createElement('img');
    img.className = 'category__img';
    img.loading = 'lazy';
    img.src = product.images[0];
    img.alt = product.title;

    const title = document.createElement('h3');
    title.className = 'category__card-title';
    title.textContent = product.title;

    const rating = createRating(product.rating);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'category__card-price';
    const price = calculateDiscountedPrice(
      product.price,
      product.discountPercentage,
    );
    priceDiv.innerHTML = `<p>$${price}</p>`;

    const discountPercentage = document.createElement('p');
    discountPercentage.className = 'category__card-discountPercentage';
    discountPercentage.textContent = `${product.discountPercentage}%`;

    const priceWithoutDiscount = document.createElement('p');
    priceWithoutDiscount.className = 'category__card-priceWithoutDiscount';
    priceWithoutDiscount.textContent = `$${product.price}`;

    priceDiv.append(priceWithoutDiscount, discountPercentage);

    card.append(img, title, rating, priceDiv);

    fragment.append(card);
  });

  categoryCards.append(fragment);
  return categoryCards;
}

export function renderCategorySection(data: Product[]): HTMLElement {
  const categorySection = document.createElement('section');
  categorySection.className = 'category';

  const title = document.createElement('h2');
  title.textContent = data[0].category;
  title.className = 'category__title';

  const filterIcon = document.createElement('div');
  filterIcon.className = 'category__filterIcon';
  title.append(filterIcon);

  filterIcon.addEventListener('click', handlerFilterIconClick);

  const line = document.createElement('div');
  line.className = 'category__line';

  categorySection.append(title, createCards(data), line);
  return categorySection;
}

function handlerFilterIconClick(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('category__filterIcon')) {
    addOverlayDiv();
    showFilterForm();
  }
}

function showFilterForm(): void {
  const filterForm = document.querySelector('.filters');
  filterForm?.classList.add('.active');
  const filterApplyBtn = document.querySelector('.filters-apply-btn');
  filterApplyBtn?.addEventListener('click', handlerFilterApplyBtnClick);
}

function addOverlayDiv(): void {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.style.overflow = 'hidden';
  overlay.addEventListener('click', handlerOverlayClick);
  const filterForm = document.querySelector('.filters');
  filterForm?.classList.add('active');
  document.body.append(overlay);
}

function removeOverlayDiv(): void {
  const overlay = document.querySelector('.overlay');
  overlay?.remove();
  document.body.style.overflow = 'auto';
  const filterForm = document.querySelector('.filters');
  filterForm?.classList.remove('active');
}

function handlerOverlayClick(event: Event): void {
  const target = event.target as HTMLElement;

  if (
    target.classList.contains('overlay') ||
    target.classList.contains('filters-apply-btn')
  ) {
    removeOverlayDiv();
  }
}

function handlerFilterApplyBtnClick(): void {
  const filterBtn = document.querySelector('.filters-apply-btn');
  filterBtn?.addEventListener('click', () => {
    removeOverlayDiv();
  });
}
