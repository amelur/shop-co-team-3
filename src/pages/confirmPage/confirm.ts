import { createConfirmationPage } from '../../components/orderConfirmation/confirmation';
import './confirm.css';
import { createAppTitle } from '../../utils/DevHelper';

export async function renderConfirmPage(): Promise<HTMLElement> {
  const page = document.createElement('div');
  page.className = 'confirmPage';

  const title = createAppTitle('Order Confirmation');

  const message = createConfirmationPage();

  page.append(title, message);
  return page;
}
