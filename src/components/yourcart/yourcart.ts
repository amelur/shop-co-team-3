import './yourcart.css';

// export function createCart () {
//     const wrapperContainer = document.createElement('div');
//     wrapperContainer.className = 'cart-wrapper';

//     const titleContainer = document.createElement('div');
//     titleContainer.className = 'cart-title-container';

//     const cartTitle = document.createElement('h1');
//     cartTitle.textContent = 'Your cart';
//     cartTitle.className = 'cart-title';
//     titleContainer.append(cartTitle);

//     const cartContainer = document.createElement('div');
//     cartContainer.className = 'cart';

//     const cartItems = [
//         {
//             image: '/src/assets/images/Frame33.png',
//             name: 'Gradient Graphic T-shirt',
//             price: '$145',
//             discount: '-40%'
//         },

//         {
//             image: '/src/assets/images/image8.png',
//             name: 'Checkered Shirt',
//             price: '$180'
//         },

//         {
//             image: '/src/assets/images/Frame71.png',
//             name: 'Skinny Fit Jeans',
//             price: '$240'
//         },
//     ]

//     cartItems.forEach((item) => {
//         const itemContainer = document.createElement('div');
//         itemContainer.className = 'cart-item';

//         const itemImage = document.createElement('img');
//         itemImage.src = item.image;
//         itemImage.alt = item.name;
//         itemImage.className = 'cart-item-image';

//         const itemInfo = document.createElement('div');
//         itemInfo.className = 'cart-item-info';
//         itemInfo.innerHTML = `
//             <h2 class = 'cart-item-name'>${item.name}</h2>
//             <div class="cart-item-price-container">
//                 <p class="cart-item-price">${item.price}</p>
//                 ${item.discount ? `<span class="cart-item-discount">${item.discount}</span>` : ''}
//             </div>
//         `;

//         itemContainer.append(itemImage, itemInfo);
//         cartContainer.append(itemContainer);
//     })

//     wrapperContainer.append(titleContainer, cartContainer);

//     return(wrapperContainer);
// }

import './yourcart.css';

export async function createCart(): Promise<HTMLElement> {
  const wrapperContainer = document.createElement('div');
  wrapperContainer.className = 'cart-wrapper';

  // const titleContainer = document.createElement('div');
  // titleContainer.className = 'cart-title-container';

  // const cartTitle = document.createElement('h1');
  // cartTitle.textContent = 'Your cart';
  // cartTitle.className = 'cart-title';
  // titleContainer.append(cartTitle);

  const cartContainer = document.createElement('div');
  cartContainer.className = 'cart';

  try {
    // Получаем случайные товары из API
    const randomProducts = await fetchRandomProducts(3);

    randomProducts.forEach((item) => {
      const itemContainer = document.createElement('div');
      itemContainer.className = 'cart-item';

      const itemImage = document.createElement('img');
      itemImage.src = item.thumbnail; // Используем 'thumbnail' из API
      itemImage.alt = item.title; // Используем 'title' как альтернативный текст
      itemImage.className = 'cart-item-image';

      const itemInfo = document.createElement('div');
      itemInfo.className = 'cart-item-info';
      itemInfo.innerHTML = `
                <h2 class="cart-item-name">${item.title}</h2>
                <div class="cart-item-price-container">
                    <p class="cart-item-price">$${item.price}</p>
                    ${item.discountPercentage ? `<span class="cart-item-discount">-${item.discountPercentage}%</span>` : ''}
                </div>
            `;

      itemContainer.append(itemImage, itemInfo);
      cartContainer.append(itemContainer);
    });
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent =
      'Не удалось загрузить товары. Пожалуйста, попробуйте позже.';
    errorMessage.className = 'cart-error-message';
    cartContainer.append(errorMessage);
  }

  wrapperContainer.append(cartContainer);
  return wrapperContainer;
}

export async function fetchRandomProducts(count: number): Promise<any[]> {
  try {
    // Загружаем все товары из API
    const res = await fetch('https://dummyjson.com/products');
    if (!res.ok) {
      throw new Error('Ошибка загрузки данных товаров');
    }
    const data = await res.json();

    // Перемешиваем товары и выбираем случайные
    const shuffled = data.products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); // Возвращаем нужное количество товаров
  } catch (error) {
    console.error('Ошибка при получении товаров:', error);
    throw error; // Пробрасываем ошибку выше
  }
}
