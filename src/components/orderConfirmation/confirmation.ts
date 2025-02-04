import './confirmation.css';

export function createConfirmationPage(): HTMLElement {
  // Получаем контейнер для приложения
const container = document.createElement('div');

  // Создаем заголовок
  const heading = document.createElement("h1");
  heading.textContent = "Order Confirmation";
  heading.className = "order-confirmation";

  // Создаем контейнер для сообщения
  const messageBox = document.createElement("div");
  messageBox.className = "message-box";

  // Добавляем текст в сообщение
  messageBox.innerHTML = `
    <p>Success! Your order has been confirmed. Please check out your email address to track delivery progress.</p>
  `;

  // Добавляем элементы в DOM
  container.append(heading, messageBox);
  return container;
}