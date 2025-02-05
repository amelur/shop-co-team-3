import './checkout.css';
import { createCheckoutForm } from '../../components/checkout/checkoutForm';
import { createAppTitle } from '../../utils/DevHelper';
import '../../components/checkout/checkout.css';

export async function renderCheckoutPage(): Promise<HTMLElement> {
  const page = document.createElement('div') as HTMLElement;
  page.className = 'checkoutPage';

  const title = createAppTitle('Checkout');

  const checkout = await createCheckoutForm(5);

  page.append(title, checkout);
  return page;
}

// const checkOut = await createCheckoutForm(5);
// document.body.append(checkOut);
