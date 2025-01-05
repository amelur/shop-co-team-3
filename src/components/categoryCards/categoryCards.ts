import './categoryCards.css';
import { renderFilters } from '../FilterForm';
const property: string = 'groceries';
export function fetchAndRenderCategory(property: string) {
  fetch(`https://dummyjson.com/products/category/${property}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);

      document.body.append(renderCategorySection(data.products));
    })
    .catch((error) => {
      console.error('Ошибка при получении данных:', error);
    });
}

function createCards(data: any) {
  const categoryCards = document.createElement('div');
  categoryCards.className = 'category__cards';

  data.forEach((product: any) => {
    const card = document.createElement('div');
    card.className = 'category__card';

    const img = document.createElement('img');
    img.className = 'category__img';
    img.src = product.images[0];

    img.alt = product.name;

    const title = document.createElement('h3');
    title.className = 'category__card-title';
    title.textContent = product.title;

    const rating = document.createElement('div');
    rating.className = 'category__card-rating';

    const starsContainer = document.createElement('div');
    starsContainer.className = 'category__card-starsContainer';

    const ratingNumber = product.rating;

    for (let i = 0; i < ratingNumber - 1; i++) {
      const starWrapper = document.createElement('div');
      starWrapper.className = 'category__card-starWrapper';
      const star = document.createElement('img');
      star.className = 'category__card-star';
      star.src = './src/assets/icons/star.svg';
      starWrapper.append(star);
      starsContainer.append(starWrapper);
    }

    if (ratingNumber % 1 !== 0) {
      const starWrapper = document.createElement('div');
      starWrapper.className = 'category__card-starWrapper';
      const star = document.createElement('img');
      star.className = 'category__card-star';
      star.src = './src/assets/icons/star.svg';
      starWrapper.style.width = `${(ratingNumber % 1) * 18.83}px`;
      starWrapper.append(star);
      starsContainer.append(starWrapper);
    }
    const ratingWrapper = document.createElement('div');
    ratingWrapper.className = 'category__card-ratingNumber';
    ratingWrapper.innerHTML = `<p>${ratingNumber}/<span>5</span></p>`;

    rating.append(starsContainer, ratingWrapper);

    const priceDiv = document.createElement('div');
    priceDiv.className = 'category__card-price';
    const price = (
      Math.round(
        (product.price - (product.price * product.discountPercentage) / 100) *
          100,
      ) / 100
    ).toFixed(2);

    priceDiv.innerHTML = `<p>$${price}</p>`;

    const discountPercentage = document.createElement('p');
    discountPercentage.className = 'category__card-discountPercentage';
    discountPercentage.textContent = `${product.discountPercentage}%`;

    const priceWithoutDiscount = document.createElement('p');
    priceWithoutDiscount.className = 'category__card-priceWithoutDiscount';
    priceWithoutDiscount.textContent = `$${product.price}`;

    priceDiv.append(priceWithoutDiscount, discountPercentage);

    card.append(img, title, rating, priceDiv);

    categoryCards.append(card);
  });

  return categoryCards;
}

export function renderCategorySection(data: any) {
  const categorySection = document.createElement('section');
  categorySection.className = 'category';

  const title = document.createElement('h2');
  title.textContent = property;
  title.className = 'category__title';

  const line = document.createElement('div');
  line.className = 'line';

  categorySection.append(title, createCards(data), line);
  return categorySection;
}

function roundToHalf(num: number): number {
  return Math.round(num * 2) / 2;
}
