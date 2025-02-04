import '../input/input.css';
import '../payment/payment.css';
import { createInput } from '../input/input';
// import { userInfoInterface } from '../../src/assets/data/userInfo.ts';
// import { placeholdersList } from '../../src/assets/data/userInfo.ts';

// const userInfo: userInfoInterface = {};

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

// function createOrderSummatySection(subtotal:number, discountInPercent:number=0){
//     const section = createSection('orderSummarySection');

//     // Название секции саммари
//     const summaryTitle = document.createElement('h2');
//     summaryTitle.textContent = "Order Summary";
    
//     const separator = createSection('separator');

//     // Добавляем статик текст и цены
//     const itemSubtotal = createItem('Subtotal', 'grayStyle', '$'+subtotal.toString(), 'blackBoldText');

//     // Создать кнопку
//     const button = document.createElement('button');
//     button.textContent = 'Go to Payment '+ '\u2192';
//     button.className = 'buttonBlack';

//     if (discountInPercent>0) {
//         const discount = parseFloat((subtotal*discountInPercent/100).toFixed(2));
//         const total = parseFloat((subtotal*(100-discountInPercent)/100).toFixed(2));
//         const itemDiscount = createItem('Discount (-'+discountInPercent.toString()+'%)', 'grayStyle', '-$'+discount.toString(), 'redText');
//         const itemTotal = createItem('Total', 'blackStyle', '$'+total.toString(), 'blackBigBoldText');
//         section.append(summaryTitle, itemSubtotal,itemDiscount, separator, itemTotal, button);
//     }
//     else {
//         const itemTotal = createItem('Total', 'blackStyle', '$'+subtotal.toString(), 'blackBigBoldText');
//         section.append(summaryTitle, itemSubtotal, separator, itemTotal, button);
//     }

//     return section;
// }

//---------------- Основная функция создания формы Checkout -------------------------------------//
export function createPaymentForm():HTMLElement {
    
    // Вся секция, будет содержать название и форму, вертикальное расположение
    const createCheckoutFormSection = createSection('createCheckoutFormSection');
    // Секция с полями и саммари
    const formSection = createSection('formSection');
    // Секция с полями
    const fieldsSection = createSection('fieldsSection');
    // Секция с саммари
    //let orderSummarySection = createSection('orderSummarySection');

    // Название формы
    const sectionTitle = document.createElement('h1');
    sectionTitle.textContent = 'Payment';

    // Поля для ввода данных
    const cardNumber = createInput("Card Number");
    const cardExpire = createInput("Card expire");
    const iban = createInput("IBAN");
    // const separator1 = createSection('separator');
    // const inpEmail = createInput("Email", '', "email");
    // const inpPhone = createInput("Phone", '', 'number');
    // const separator2 = createSection('separator');
    // const inpAddress = createInput("Address");
    // const inpCity = createInput("City");
    // const inpPostalCode = createInput("Postal code");

    // Добавляем поля для ввода данных в секцию
    fieldsSection.append(cardNumber, cardExpire, iban)
        //  separator1,  
        // inpEmail, inpPhone, separator2,
        // inpAddress, inpCity, inpPostalCode);

    // ------- Формируем саммари секцию -------  -------  ------- 
    // Название секции саммари
    const summaryTitle = document.createElement('h2');
    summaryTitle.textContent = "Order Summary";
    
    const separator3 = createSection('separator');
    // Добавляем статик текст и цены
    const itemSubtotal = createItem('Subtotal', 'grayStyle', '$565', 'blackBoldText');
    const itemDiscount = createItem('Discount (-20%)', 'grayStyle', '-$113', 'redText');
    const itemTotal = createItem('Total', 'blackStyle', '$467', 'blackBigBoldText');
    // Создать кнопку
    const button = document.createElement('button');
    button.textContent = 'Go to Payment '+ '\u2192';
    button.className = 'buttonBlack';

    // Наполняем секцию саммари полями и кнопкой
    // const orderSummarySection = createOrderSummatySection(522.66, 18);

    // Объединяем секцию с полями и с саммари
    formSection.append(fieldsSection);

    // Собираем всю секцию: Название и форма
    createCheckoutFormSection.append(sectionTitle, formSection);

// Отобразить всю секцию Checkout
// document.body.appendChild(createCheckoutFormSection);
// Вернуть секцию Checkout
        return createCheckoutFormSection;
}
  