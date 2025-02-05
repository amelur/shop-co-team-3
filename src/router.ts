import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/categoryPage/categoryPage';
import { renderProductDetailPage } from './pages/productDetailPage/productDetail';
import { renderCartPage } from './pages/cartPage/cart';
import { renderCheckoutPage } from './pages/checkoutPage/checkout';
import { renderPaymentPage } from './pages/paymentPage/payment';

import { createCheckoutForm } from './components/checkout/checkoutForm';

import { createConfirmationPage } from './components/orderConfirmation/confirmation';

const router = new Navigo('/', { strategy: 'ALL' });

const appElement = document.getElementById('app') as HTMLElement;

const clearApp = () => {
  appElement.innerHTML = '';
};

const showErrorMessage = (message: string) => {
  clearApp();
  const errorElement = document.createElement('div');
  errorElement.innerHTML = `<h1>Ошибка</h1><p>${message}</p>`;
  errorElement.style.color = 'red';
  errorElement.style.textAlign = 'center';
  appElement.append(errorElement);
};

router
  .on('/', async () => {
    try {
      clearApp();
      await renderHomePage();
    } catch (error) {
      showErrorMessage('Не удалось загрузить главную страницу.');
    }
  })

  .on('/category/:category', async (match) => {
    try {
      clearApp();
      const category = match?.data?.category;
      if (category) {
        const categorySection = await renderCategoryPage(category);
        appElement.append(categorySection);
      } else {
        throw new Error('Категория отсутствует в параметрах.');
      }
    } catch (error) {
      showErrorMessage('Ошибка загрузки категории.');
    }
  })

  .on('/product/:productId', async (match) => {
    try {
      clearApp();
      const productID = match?.data?.productId;
      if (productID) {
        const productSection = await renderProductDetailPage(productID);
        appElement.append(productSection);
      } else {
        throw new Error('ID продукта отсутствует в параметрах.');
      }
    } catch (error) {
      showErrorMessage('Ошибка загрузки продукта.');
    }
  })

  .on('/cart', async () => {
    try {
      clearApp();
      const page = await renderCartPage();
      appElement.append(page);
    } catch (error) {
      showErrorMessage('Ошибка загрузки корзины.');
      console.error(error);
    }
  })

  .on('/checkout', async () => {
    try {
      clearApp();
      const checkout = await renderCheckoutPage();
      appElement.append(checkout);
    } catch (error) {
      showErrorMessage('Ошибка загрузки оформления заказа.');
      console.error(error);
    }
  })

  .on('/payment', async () => {
    try {
      clearApp();
      const page = await renderPaymentPage();
      appElement.append(page);
    } catch (error) {
      showErrorMessage('Ошибка загрузки страницы оплаты.');
    }
  })

  .on('/confirm', async () => {
    try {
      clearApp();
      const confirm = createConfirmationPage();
      appElement.append(confirm);
    } catch (error) {
      showErrorMessage('Ошибка загрузки подтверждения заказа.');
    }
  })

  .notFound(() => {
    showErrorMessage('Страница не найдена.');
  });

router.resolve();

export default router;
