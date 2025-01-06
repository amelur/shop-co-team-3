import './addToCart.css';

// Тип данных для продукта
interface Product {
    title: string;
    rating: number;
    price: number;
    oldPrice: number;
    discount: number;
    description: string;
    brand: string;
    stock: number;
  }
  
  // Пример данных
  const productData: Product = {
    title: "Tree Oil 30ml",
    rating: 4.5,
    price: 260,
    oldPrice: 300,
    discount: 40,
    description:
      "Tea tree oil contains a number of compounds, including terpine-4-ol, that have been shown to kill certain bacteria.",
    brand: "Hemani Tea",
    stock: 78,
  };



  // Функция для создания одной компоненты продукта
  function createProductComponent(product: Product): HTMLElement {
  
    const productElement = document.createElement("div");
    productElement.setAttribute("class", "product");
  
  
    // 1 conteiner
    const titleRatinAndDescription = document.createElement('div');
    titleRatinAndDescription.setAttribute('class', 'titleRatinAndDerection');
    productElement.append(titleRatinAndDescription);
    // Заголовок
    const title = document.createElement("h2");
    title.textContent = product.title;
    
  
  // Рейтинг
  const rating = document.createElement("div");
  rating.setAttribute("class", "rating");
  rating.innerHTML = createStars(product.rating);
  
  const numberRating = document.createElement("p");
  rating.setAttribute("class", "rating-num");
  numberRating.textContent = `${product.rating}/5`; 
  numberRating.style.color = "black";
  // Добавляем числовой рейтинг в контейнер
  rating.append(numberRating);
  // Добавляем рейтинг в элемент продукта
  
    // Цена
    const priceContainer = document.createElement("div");
    priceContainer.setAttribute("class", "price-container");
    priceContainer.innerHTML = `
      <span class="price">$${product.price}</span>
      <span class="old-price">$${product.oldPrice}</span>
      <div class="discount">-${product.discount}%</div>
    `;
   
    // Описание
    const description = document.createElement("p");
    description.textContent = product.description;
    
    titleRatinAndDescription.append(title, rating, priceContainer, description);
    productElement.append(titleRatinAndDescription);
  
    const hr1 = document.createElement('hr');
    productElement.append(hr1);
  
    // Бренд
    const brand = document.createElement("div");
    brand.setAttribute("class", "brand");
    brand.innerHTML = `<p class="style_brand">Brand</p> 
    <strong>${product.brand}</strong> `;
    productElement.append(brand);
  
    const hr2 = document.createElement('hr');
    productElement.append(hr2);
  
    // Наличие
    const stock = document.createElement("div");
    stock.setAttribute("class", "stock");
    stock.innerHTML = `<p class="style_stock">In Stock</p>
    <strong>${product.stock} items</strong>`;
    productElement.append(stock);
  
    const hr3 = document.createElement('hr');
    productElement.append(hr3);
  
  
    // кнопки
    const buttonsConteiner = document.createElement('div');
    buttonsConteiner.setAttribute('class', 'buttonsConteiner');
    // Счетчик товаров
    const counter = createCounter();
    
  
    // Кнопка "Добавить в корзину"
    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.setAttribute("class", "add-to-cart");
  
    buttonsConteiner.append(button, counter);
  
    productElement.append(buttonsConteiner);
  
    return productElement;
  }
  
  
  // Функция для создания звезд рейтинга
  function createStars(rating: number): string {
    const fullStars = Math.floor(rating); // Число полных звезд
    const hasHalfStar = rating % 1 >= 0.5; 
    let starsHtml = "";
  
     const fullStarUrl = './src/assets/icons/star.svg'; 
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
  
  
  
  // Функция для создания счетчика товаров
  function createCounter(): HTMLElement {
    const counterContainer = document.createElement("div");
    counterContainer.setAttribute("class", "counter");
  
   
    const decrementButton = document.createElement("button");
    decrementButton.setAttribute('class', 'minus');
    const minusIcon = document.createElement("img");
    minusIcon.src = './src/assets/icons/minus.svg';
    minusIcon.alt = "minus"; 
    decrementButton.append(minusIcon);
  
  
  
    const counterValue = document.createElement("span");
    counterValue.textContent = "1"; // Начальное значение
    counterValue.setAttribute("class", "counter-value");
  
   
    const incrementButton = document.createElement("button");
    incrementButton.setAttribute('class', 'plus');
    const plusIcon = document.createElement("img");
    plusIcon.src = './src/assets/icons/plus.svg'; 
    plusIcon.alt = "plus"; 
    incrementButton.append(plusIcon); 
  
    decrementButton.addEventListener("click", () => {
      const currentValue = parseInt(counterValue.textContent || "1", 10);
      if (currentValue > 1) counterValue.textContent = (currentValue - 1).toString();
    });
  
    incrementButton.addEventListener("click", () => {
      const currentValue = parseInt(counterValue.textContent || "1", 10);
      counterValue.textContent = (currentValue + 1).toString();
    });
  
    counterContainer.append(decrementButton);
    counterContainer.append(counterValue);
    counterContainer.append(incrementButton);
  
    return counterContainer;
  }
  
 
  // Рендерим компонент в контейнер
  export function renderProduct() {
      const productComponent = createProductComponent(productData);
      document.body.append(productComponent);
  }