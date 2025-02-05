import '../input/input.css';
import '../payment/payment.css';
import { createInput } from '../input/input';

const createSection = (className: string): HTMLElement => {
  const section = document.createElement('div');
  section.className = className;
  return section;
};

const createTextElement = (content: string, className: string): HTMLParagraphElement => {
  const element = document.createElement('p');
  element.textContent = content;
  element.className = className;
  return element;
};

const createItem = (text: string, textStyle: string, price: string, priceStyle: string): HTMLElement => {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.justifyContent = 'space-between';

  div.append(createTextElement(text, textStyle), createTextElement(price, priceStyle));
  return div;
};

export const createPaymentForm = (): HTMLElement => {
  const createCheckoutFormSection = createSection('createCheckoutFormSection');
  const formSection = createSection('formSection');
  const fieldsSection = createSection('fieldsSection');
  fieldsSection.classList.add('payment');

  ['Card Number', 'Card Expire', 'IBAN'].forEach(label => fieldsSection.append(createInput(label)));

  formSection.append(fieldsSection);
  createCheckoutFormSection.append(formSection);
  
  return createCheckoutFormSection;
};
