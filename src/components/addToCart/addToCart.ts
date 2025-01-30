import './addToCart.css';
import starImg from '../../assets/icons/star.svg';

const urlCardId = new URLSearchParams(window.location.search);
const cardId = urlCardId.get('id');


export async function fetchProduct(productId: string | null) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  return response.json();
}

export function renderProduct(product: any) {
  const container = document.getElementById("add") as HTMLElement;

  container.innerHTML = `
    <div class="product-detail">

      <h2>${product.title}</h2>

      <div class="rating">
        ${createStars(product.rating)} <!-- Генерация звёзд -->
  <p class="rating-num">${product.rating}/5</p>
      </div>

      <div class="price-container">
        <span class="price">$${product.price}</span>
        <span class="old-price">$${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
        <div class="discount">-${product.discountPercentage}%</div>
      </div>

      <p>${product.description}</p>

      <hr>

      <div class="brand">
      <p class="style_brand">Brand</p>
      <strong>${product.brand}</strong></div>

      <hr>

      <div class="stock">
      <p class="style_stock">In Stock</p>
      <strong>${product.stock} items</strong></div>

      <hr>

      <div class="buttonsConteiner">
      
      <div class="counter">
        <button class="minus" id="decrement">
        <img src="./src/assets/icons/minus.svg">
        </button>

        <span class="counter-value" id="quantity">1</span>

        <button class="plus" id="increment">
        <img src="./src/assets/icons/plus.svg">
        </button>
      </div>

      <button class="add-to-cart">Add to Cart</button>
    </div>

    </div>
  `;


    // Функция для создания звезд рейтинга
    function createStars(rating: number): string {
      const fullStars = Math.floor(rating); // Число полных звезд
      const hasHalfStar = rating % 1 >= 0.5; 
      let starsHtml = "";
    
       const fullStarUrl = starImg; 
       const halfStarUrl = './src/assets/icons/star-half.svg'; 
    
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
    

 
  let quantity = 1;
  document.getElementById("decrement").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      document.getElementById("quantity").innerText = quantity.toString();
    }
  });
  document.getElementById("increment").addEventListener("click", () => {
    if (quantity < product.stock) {
      quantity++;
      document.getElementById("quantity").innerText = quantity.toString();
    }
  });
}

export async function renderProductDetail() {
  const productId = cardId; // Заменить на нужный ID продукта
  const product = await fetchProduct(cardId);
  renderProduct(product);
};
