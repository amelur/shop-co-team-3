import './addToCart.css';
import router from '../../router';
import starImg from '../../assets/icons/star.svg';
import starHalfImg from '../../assets/icons/star-half.svg';
import minusIcon from '../../assets/icons/minus.svg';
import plusIcon from '../../assets/icons/plus.svg';

const urlCardId = new URLSearchParams(window.location.search);
const cardId = urlCardId.get('id');

export async function fetchProduct(productId: string | null) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  return response.json();
}

export async function renderProduct(product: any) {
  const container = document.createElement('section') as HTMLElement;
  container.classList.add('details');

  // Вызываем функцию createStars для создания HTML со звездами
  const stars = createStars(product.rating);  // Вызов createStars для генерации HTML со звездами

  container.innerHTML = `
  <section class="details">
    <div class="product-detail">
      <h2>${product.title}</h2>

      <div class="rating">
        ${stars} <!-- Вставляем сгенерированные звезды -->
        <p class="rating-num">${product.rating}/5</p>
      </div>

      <div class="price-container">
        <span class="price">$${(
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2)}</span>
        <span class="old-price">$${product.price}</span>
        <div class="discount">-${product.discountPercentage}%</div>
      </div>

      <p class="description">${product.description}</p>

      <hr>

      <div class="brand">
        <p class="style_brand">Brand</p>
        <strong>${product.brand}</strong>
      </div>

      <hr>

      <div class="stock">
        <p class="style_stock">In Stock</p>
        <strong>${product.stock} items</strong>
      </div>

      <hr>

      <div class="buttonsConteiner">
        <div class="counter">
          <button class="minus" id="decrement">
            <img src="${minusIcon}">
          </button>

          <span class="counter-value" id="quantity">1</span>

          <button class="plus" id="increment">
            <img src="${plusIcon}">
          </button>
        </div>

        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>
  `;

  // Обработчик для кнопки "Добавить в корзину"
  const addToCartButton = container.querySelector('.add-to-cart') as HTMLButtonElement;
  addToCartButton.addEventListener('click', () => {
    router.navigate(`/cart`);
  });

  // Логика для изменения количества
  let quantity = 1;
  const decrementButton = container.querySelector('#decrement');
  const incrementButton = container.querySelector('#increment');
  const quantityDisplay = container.querySelector('#quantity');

  // Обработчик для кнопки уменьшения количества
  decrementButton?.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay!.innerText = quantity.toString();
    }
  });

  // Обработчик для кнопки увеличения количества
  incrementButton?.addEventListener('click', () => {
    if (quantity < product.stock) {
      quantity++;
      quantityDisplay!.innerText = quantity.toString();
    }
  });

  return container;
}

// Функция для создания звезд по рейтингу
function createStars(rating: number): string {
  const fullStars = Math.floor(rating); // Число полных звезд
  const hasHalfStar = rating % 1 >= 0.5; // Проверяем, нужна ли половина звезды
  let starsHtml = '';

  const fullStarUrl = starImg;
  const halfStarUrl = starHalfImg;

  // Добавляем полные звезды
  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<img src="${fullStarUrl}" alt="Full Star">`;
  }

  // Добавляем половину звезды, если нужно
  if (hasHalfStar) {
    starsHtml += `<img src="${halfStarUrl}" alt="Half Star">`;
  }

  return `<span class="stars">${starsHtml}</span>`;
}
