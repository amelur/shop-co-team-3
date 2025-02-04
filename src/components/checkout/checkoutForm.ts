import './input.css';
import './checkoutForm.css';
import { createInput } from '../../components/input/input.ts';
import { createOrderSummarySection } from './orderSummarySection.ts';

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

export async function getCartInformation(cartID: number = 1): Promise<Cart | null> {
  try {
    const res = await fetch('https://dummyjson.com/carts/'+cartID);
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
export function createSection(style: string):HTMLElement{
    const section = document.createElement('div');
    section.className = style;
    return section;
}

// Функция создания одного item, это див с текстом слева и ценой справа, каждый со своим стилем
function createItem(text: string, textStyle: string, price: string, priceStyle: string):HTMLElement{
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

//---------------- Основная функция создания формы Checkout -------------------------------------//
export async function createCheckoutForm(cartID: number = 1):Promise<HTMLElement> {
    
    // Вся секция, будет содержать название и форму, вертикальное расположение
    const checkoutFormSection = createSection('createCheckoutFormSection');
    // Секция с полями и саммари
    const formSection = createSection('formSection');
    // Секция с полями
    const fieldsSection = createSection('fieldsSection');
    // Секция с саммари
    //let orderSummarySection = createSection('orderSummarySection');

    // Название формы
    const sectionTitle = document.createElement('h1');
    sectionTitle.textContent = 'Checkout';

    // Поля для ввода данных
    const inpFirstName = createInput("First name");
    const inpLastName = createInput("Last name");
    const inpMaidenName = createInput("Maiden name");
    const separator1 = createSection('separator');
    const inpEmail = createInput("Email", '', "email");
    const inpPhone = createInput("Phone", '', 'number');
    const separator2 = createSection('separator');
    const inpAddress = createInput("Address");
    const inpCity = createInput("City");
    const inpPostalCode = createInput("Postal code");

    // Добавляем поля для ввода данных в секцию
    fieldsSection.append(inpFirstName, inpLastName, inpMaidenName, separator1,  
        inpEmail, inpPhone, separator2,
        inpAddress, inpCity, inpPostalCode);

    // ------- Формируем саммари секцию -------  -------  ------- 
    // Название секции саммари
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = "Order Summary";
    
    const data = await getCartInformation (cartID);
    
    const orderSummarySection = createOrderSummarySection(data);
    
    // Объединяем секцию с полями и с саммари
    formSection.append(fieldsSection, orderSummarySection);

    // Собираем всю секцию: Название и форма
    checkoutFormSection.append(sectionTitle, formSection);

    return (checkoutFormSection);
}

