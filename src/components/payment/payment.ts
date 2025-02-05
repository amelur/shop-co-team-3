import '../input/input.css';
import '../payment/payment.css';
import { createInput } from '../input/input';

// Функция создания секции с заданным стилем
export function createSection(style: string): HTMLElement {
  const section = document.createElement('div');
  section.className = style;
  return section;
}

// Функция создания одного item (текст + цена)
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

// // Функция создания секции Order Summary
// function createOrderSummarySection(subtotal: number, discountInPercent: number = 0): HTMLElement {
//   const section = createSection('orderSummarySection');

//   const summaryTitle = document.createElement('h2');
//   summaryTitle.textContent = 'Order Summary';

//   const separator = createSection('separator');
//   const itemSubtotal = createItem('Subtotal', 'grayStyle', `$${subtotal.toFixed(2)}`, 'blackBoldText');
//   const button = document.createElement('button');
//   button.textContent = 'Go to Payment →';
//   button.className = 'buttonBlack';

//   if (discountInPercent > 0) {
//     const discount = parseFloat((subtotal * discountInPercent / 100).toFixed(2));
//     const total = parseFloat((subtotal * (100 - discountInPercent) / 100).toFixed(2));
//     const itemDiscount = createItem(`Discount (-${discountInPercent}%)`, 'grayStyle', `-$${discount.toFixed(2)}`, 'redText');
//     const itemTotal = createItem('Total', 'blackStyle', `$${total.toFixed(2)}`, 'blackBigBoldText');
//     section.append(summaryTitle, itemSubtotal, itemDiscount, separator, itemTotal, button);
//   } else {
//     const itemTotal = createItem('Total', 'blackStyle', `$${subtotal.toFixed(2)}`, 'blackBigBoldText');
//     section.append(summaryTitle, itemSubtotal, separator, itemTotal, button);
//   }

//   return section;
// }

// Основная функция создания формы Checkout
export function createPaymentForm(): HTMLElement {
  const createCheckoutFormSection = createSection('createCheckoutFormSection');
  const formSection = createSection('formSection');
  const fieldsSection = createSection('fieldsSection');
  fieldsSection.classList.add('payment');

  // Поля ввода
  const cardNumber = createInput('Card Number');
  const cardExpire = createInput('Card Expire');
  const iban = createInput('IBAN');

  fieldsSection.append(cardNumber, cardExpire, iban);
  formSection.append(fieldsSection);

  createCheckoutFormSection.append(formSection);

  return createCheckoutFormSection;
}
