import Navigo from 'navigo';
import { renderHomePage } from './pages/home/home';
import { renderCategoryPage } from './pages/CategoryPage/categoryPage';
import { renderProductDetail } from './components/addToCart/addToCart';

const router = new Navigo('/');

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

  .on('/category/:id', async (match) => {
    appElement.innerHTML = '';
    console.log(match);
    // renderProductDetail(match?.data?.id);
  })

  .notFound(() => {
    appElement.innerHTML = '<h1>Страница не найдена</h1>';
  });

router.resolve();

export default router;
