import './confirmation.css';

export function createConfirmationPage(appId: string): void {
  // Получаем контейнер для приложения

  const app = document.getElementById(appId) as HTMLElement;

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
  app.append(heading);
  app.append(messageBox);
}