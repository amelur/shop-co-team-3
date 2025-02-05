import router from '../../router';
import './confirmation.css';

export function createConfirmationPage(): HTMLElement {
  const messageBox = Object.assign(document.createElement('div'), {
    className: 'message-box',
    innerHTML: `<p>Success! Your order has been confirmed. Please check your email to track delivery progress.</p>`,
  });

  setTimeout(() => {
    router.navigate('/');
  }, 5000);

  return messageBox;
}
