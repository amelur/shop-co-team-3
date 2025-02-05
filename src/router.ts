import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/CategoryPage/categoryPage';
import { renderProductDetailPage } from './pages/ProductDetailPage/productDetail';
import { renderCartPage } from './pages/cartPage/cart';
import { renderCheckoutPage } from './pages/checkoutPage/checkout';
import { renderPaymentPage } from './pages/paymentPage/payment';
import { renderConfirmPage } from './pages/confirmPage/confirm';

type Match = { data: Record<string, string> };

const router = new Navigo('/', { strategy: 'ALL' });
const appElement = document.getElementById('app') as HTMLElement;

const clearApp = (): void => {
  appElement.innerHTML = '';
};

const showErrorMessage = (message: string): void => {
  clearApp();
  appElement.innerHTML = `<div style="color: red; text-align: center;"><h1>Ошибка</h1><p>${message}</p></div>`;
};

const handleRoute = async (
  callback: () => Promise<HTMLElement> | HTMLElement | Promise<void>,
  errorMessage: string,
): Promise<void> => {
  try {
    clearApp();
    const content = await callback();
    if (content) appElement.append(content);
  } catch (error) {
    console.error(error);
    showErrorMessage(errorMessage);
  }
};

router
  .on('/', () =>
    handleRoute(renderHomePage, 'Не удалось загрузить главную страницу.'),
  )
  .on('/category/:category', ({ data }: Match) =>
    handleRoute(
      () => renderCategoryPage(data.category),
      'Ошибка загрузки категории.',
    ),
  )
  .on('/product/:productId', ({ data }: Match) =>
    handleRoute(
      () => renderProductDetailPage(data.productId),
      'Ошибка загрузки продукта.',
    ),
  )
  .on('/cart', () => handleRoute(renderCartPage, 'Ошибка загрузки корзины.'))
  .on('/checkout', () =>
    handleRoute(renderCheckoutPage, 'Ошибка загрузки оформления заказа.'),
  )
  .on('/payment', () =>
    handleRoute(renderPaymentPage, 'Ошибка загрузки страницы оплаты.'),
  )
  .on('/confirm', () =>
    handleRoute(renderConfirmPage, 'Ошибка загрузки подтверждения заказа.'),
  )
  .notFound(() => showErrorMessage('Страница не найдена.'));

router.resolve();

export default router;
