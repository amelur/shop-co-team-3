import router from '../../router';
import './orderSummarySection.css';

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export async function getCartInformation(
  cartID: number = 10,
): Promise<Cart | null> {
  try {
    const res = await fetch('https://dummyjson.com/carts/' + cartID);
    if (!res.ok) {
      throw new Error('Ошибка загрузки данных корзины');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении данных о корзине:', error);
    return null;
  }
}

// ===================================================================================
// Функция создания секции с заданным стилем
export function createSection(style: string): HTMLElement {
  const section = document.createElement('div');
  section.className = style;
  return section;
}

// Функция создания одного item, это див с текстом слева и ценой справа, каждый со своим стилем
function createItem(
  text: string,
  textStyle: string,
  price: string,
  priceStyle: string,
): HTMLElement {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.justifyContent = 'space-between';

  const staticText = document.createElement('p');
  staticText.textContent = text;
  staticText.className = textStyle;

  const priceText = document.createElement('p');
  priceText.textContent = price;
  priceText.className = priceStyle;

  div.append(staticText, priceText);
  return div;
}

export function createOrderSummarySection(data: Cart | null) {
  // !! Передача всего объекта
  //
  const discountInPercent = (
    ((data.total - data.discountedTotal) / data.total) *
    100
  ).toFixed(2);
  const section = createSection('orderSummarySection');

  // Название секции саммари
  const summaryTitle = document.createElement('h2');
  summaryTitle.textContent = 'Order Summary';

  const separator = createSection('separator');

  // Добавляем статик текст и цены
  const itemSubtotal = createItem(
    'Subtotal',
    'grayStyle',
    '$' + data.total.toString(),
    'blackBoldText',
  );

  // Создать кнопку
  const button = document.createElement('button');
  button.textContent = 'Go to Payment ' + '\u2192';
  button.className = 'buttonBlack';
  button.type = 'submit';

  const routes: Record<string, string> = {
    '/cart': '/checkout',
    '/checkout': '/payment',
    '/payment': '/confirm',
  };

  if (button) {
    const handleClick = (event: Event) => {
      event.preventDefault();

      const currentPath: string = window.location.pathname;
      const nextPath: string | undefined = routes[currentPath];

      if (nextPath) {
        router.navigate(nextPath);
      }
    };

    button.removeEventListener('click', handleClick);
    button.addEventListener('click', handleClick);
  }

  if (discountInPercent > 0) {
    const discount = parseFloat(
      ((data.total * discountInPercent) / 100).toFixed(2),
    );
    const total = parseFloat(
      ((data.total * (100 - discountInPercent)) / 100).toFixed(2),
    );
    const itemDiscount = createItem(
      'Discount (-' + discountInPercent.toString() + '%)',
      'grayStyle',
      '-$' + discount.toString(),
      'redText',
    );
    const itemTotal = createItem(
      'Total',
      'blackStyle',
      '$' + total.toString(),
      'blackBigBoldText',
    );
    section.append(
      summaryTitle,
      itemSubtotal,
      itemDiscount,
      separator,
      itemTotal,
      button,
    );
  } else {
    const itemTotal = createItem(
      'Total',
      'blackStyle',
      '$' + data.total.toString(),
      'blackBigBoldText',
    );
    section.append(summaryTitle, itemSubtotal, separator, itemTotal, button);
  }

  return section;
}
