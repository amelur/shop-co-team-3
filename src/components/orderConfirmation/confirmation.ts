import './confirmation.css';

export function createConfirmationPage(): HTMLElement {
  const container = document.createElement('div');
  const heading = Object.assign(document.createElement('h1'), {
    textContent: 'Order Confirmation',
    className: 'order-confirmation'
  });

  const messageBox = Object.assign(document.createElement('div'), {
    className: 'message-box',
    innerHTML: `<p>Success! Your order has been confirmed. Please check your email to track delivery progress.</p>`
  });

  container.append(heading, messageBox);
  return container;
}
