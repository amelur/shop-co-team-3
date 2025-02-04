import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/CategoryPage/categoryPage';
import { renderProductDetailPage } from './pages/ProductDetailPage/productDetail';
import { createCart } from './components/yourcart/yourcart';
import { createOrderSummarySection } from './components/checkout/orderSummarySection';
import { getCartInformation } from './components/checkout/orderSummarySection';
import { createCheckoutForm } from './components/checkout/checkoutForm';
import { createPaymentForm } from './components/payment/payment';
import { createConfirmationPage } from './components/orderConfirmation/confirmation';
//const router = new Navigo('/');

const router = new Navigo('/', { strategy: 'ALL' });

const appElement = document.getElementById('app') as HTMLElement;

router

  .on('/', async () => {
    appElement.innerHTML = '';
    await renderHomePage();
  })

  .on('/category/:category', async (match) => {
    appElement.innerHTML = '';
    const category = match?.data?.category;
    if (category) {
      const categorySection = await renderCategoryPage(category);
      appElement.append(categorySection);
    } else {
      console.error('Category not found in params');
    }
  })

  .on('/product/:productId', async (match) => {
    appElement.innerHTML = '';
    const productID = match?.data?.productId;
    const productSection = await renderProductDetailPage(productID);
    appElement.append(productSection);
  })

  .on('/cart', async () => {
    appElement.innerHTML = '';
   const page = await createCart();
   const data = await getCartInformation(3);
    const orderSummarySection = createOrderSummarySection(data);
    appElement.append(page, orderSummarySection);
  })
  
  .on('/checkout', async () => {
    appElement.innerHTML = '';
    const checkout = await createCheckoutForm(3);
    appElement.append(checkout);
  })
  
  .on('/payment', async () => {
    appElement.innerHTML = '';
    const payment = await createPaymentForm();
    const data = await getCartInformation(3);
    const orderSummarySection = createOrderSummarySection(data);
    appElement.append(payment, orderSummarySection);
  })
  

  .on('/confirm', async () => {
    appElement.innerHTML = '';
    const confirm = createConfirmationPage();
    appElement.append(confirm);
  })
  
  //.on('/category/:id', async (match) => {
 //appElement.innerHTML = '';
  //   console.log(match);
  //   renderProductDetail(match?.data?.id);
  // })

  .notFound(() => {
    appElement.innerHTML = '<h1>Страница не найдена</h1>';
  });

router.resolve();

export default router;
