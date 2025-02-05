import "./addToCart.css";
import router from "../../router";
import starImg from "../../assets/icons/star.svg";
import starHalfImg from "../../assets/icons/star-half.svg";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";

const urlCardId = new URLSearchParams(window.location.search);
const cardId = urlCardId.get("id");

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  description: string;
  brand?: string;
  stock: number;
}

export async function fetchProduct(productId: string | null): Promise<Product> {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!response.ok) throw new Error("Failed to fetch product data");
  return response.json();
}

export async function renderProduct(product: Product): Promise<HTMLElement> {
  const container = document.createElement("section");
  container.classList.add("details");

  const stars = createStars(product.rating);

  container.innerHTML = `
  <section class="details">
    <div class="product-detail">
      <h2>${product.title}</h2>
      <div class="rating">
        ${stars}
        <p class="rating-num">${product.rating}/5</p>
      </div>
      <div class="price-container">
        <span class="price">$${(product.price - product.price * (product.discountPercentage / 100)).toFixed(2)}</span>
        <span class="old-price">$${product.price}</span>
        <div class="discount">-${product.discountPercentage}%</div>
      </div>
      <p class="description">${product.description}</p>
      <hr>
      ${product.brand ? `<div class="brand">
        <p class="style_brand">Brand</p>
        <strong>${product.brand}</strong>
      </div>
      <hr>` : ""}
      <div class="stock">
        <p class="style_stock">In Stock</p>
        <strong>${product.stock} items</strong>
      </div>
      <hr>
      <div class="buttonsContainer">
        <div class="counter">
          <button class="minus" id="decrement"><img src="${minusIcon}"></button>
          <span class="counter-value" id="quantity">1</span>
          <button class="plus" id="increment"><img src="${plusIcon}"></button>
        </div>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    </div>
  </section>
  `;

  const addToCartButton = container.querySelector(".add-to-cart") as HTMLButtonElement;
  addToCartButton.addEventListener("click", () => router.navigate("/cart"));

  let quantity = 1;
  const decrementButton = container.querySelector("#decrement") as HTMLButtonElement;
  const incrementButton = container.querySelector("#increment") as HTMLButtonElement;
  const quantityDisplay = container.querySelector("#quantity") as HTMLElement;

  decrementButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity.toString();
    }
  });

  incrementButton.addEventListener("click", () => {
    if (quantity < product.stock) {
      quantity++;
      quantityDisplay.textContent = quantity.toString();
    }
  });

  return container;
}

function createStars(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += `<img src="${starImg}" alt="Full Star">`;
  }

  if (hasHalfStar) {
    starsHtml += `<img src="${starHalfImg}" alt="Half Star">`;
  }

  return `<span class="stars">${starsHtml}</span>`;
}
