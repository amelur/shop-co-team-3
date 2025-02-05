import './payment.css';
import { createOrderSummarySection } from '../../components/checkout/orderSummarySection';
import { getCartInformation } from '../../components/checkout/orderSummarySection';
import { createPaymentForm } from '../../components/payment/payment';
import { createAppTitle } from '../../utils/DevHelper';

export async function renderPaymentPage(): Promise<HTMLElement> {
  const paymentPage = document.createElement('div');
  paymentPage.className = 'paymentPage';

  const title = createAppTitle('Payment');

  const wrapper = document.createElement('div');
  wrapper.className = 'paymentWrapper';

  const payment = await createPaymentForm();
  const data = await getCartInformation(3);
  const orderSummarySection = createOrderSummarySection(data);

  wrapper.append(payment, orderSummarySection);
  paymentPage.append(title, wrapper);

  return paymentPage;
}
