import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/CategoryPage/categoryPage';
import { renderProductDetailPage } from './pages/ProductDetailPage/productDetail';
import { createCart } from './components/yourcart/yourcart';
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
    appElement.append(page);
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
