import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/CategoryPage/categoryPage';
import { renderProductDetail } from './pages/ProductDetailPage/productDetail';
import { fetchProduct } from './components/addToCart/addToCart';

// const router = new Navigo('/');

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

 
  // .on('/product/:productId', async (match) => {
  //   appElement.innerHTML = ''; 
  //   const productSection = await renderProductDetail(match?.data?.productId);
  //   appElement.appendChild(productSection);
  // })
  
  

  // .on('/category/:id', async (match) => {
  //   appElement.innerHTML = '';
  //   console.log(match);
  //   renderProductDetail(match?.data?.id);
  // })

  .notFound(() => {
    appElement.innerHTML = '<h1>Страница не найдена</h1>';
  });

router.resolve();

export default router;
