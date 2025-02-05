// import { createHeader } from '../../components/heeder/header';
import { renderProduct } from '../../components/addToCart/addToCart';
import { fetchProduct } from '../../components/addToCart/addToCart';
// import { createFooter } from '../../components/footer/footer';
import { createProductImagesSection } from '../../components/productImages/productImages';
import './productDetail.css';


export async function renderProductDetailPage(
  productId: string,
): Promise<HTMLElement> {
 const productPage = document.createElement('div');
 productPage.className = 'productPage';

  const product = await fetchProduct(productId);
  const page = await renderProduct(product);

  const images = await createProductImagesSection(Number(productId));
  productPage.append(images, page);

  return productPage;
}
