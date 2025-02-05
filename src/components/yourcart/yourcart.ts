import "./yourcart.css";

interface Product {
  title: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
}

export async function createCart(): Promise<HTMLElement> {
  const wrapperContainer = document.createElement("div");
  wrapperContainer.className = "cart-wrapper";

  const cartContainer = document.createElement("div");
  cartContainer.className = "cart";

  try {
    const randomProducts = await fetchRandomProducts(3);

    randomProducts.forEach((item) => {
      cartContainer.appendChild(createCartItem(item));
    });
  } catch (error) {
    console.error("Ошибка при загрузке товаров:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Не удалось загрузить товары. Пожалуйста, попробуйте позже.";
    errorMessage.className = "cart-error-message";
    cartContainer.appendChild(errorMessage);
  }

  wrapperContainer.appendChild(cartContainer);
  return wrapperContainer;
}

function createCartItem(item: Product): HTMLElement {
  const itemContainer = document.createElement("div");
  itemContainer.className = "cart-item";

  const itemImage = document.createElement("img");
  itemImage.src = item.thumbnail;
  itemImage.alt = item.title;
  itemImage.className = "cart-item-image";

  const itemInfo = document.createElement("div");
  itemInfo.className = "cart-item-info";
  itemInfo.innerHTML = `
    <h2 class="cart-item-name">${item.title}</h2>
    <div class="cart-item-price-container">
      <p class="cart-item-price">$${item.price}</p>
      ${item.discountPercentage ? `<span class="cart-item-discount">-${item.discountPercentage}%</span>` : ""}
    </div>
  `;

  itemContainer.append(itemImage, itemInfo);
  return itemContainer;
}

export async function fetchRandomProducts(count: number): Promise<Product[]> {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("Ошибка загрузки данных товаров");
    }
    const data = await res.json();
    
    return data.products.sort(() => 0.5 - Math.random()).slice(0, count);
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
}
