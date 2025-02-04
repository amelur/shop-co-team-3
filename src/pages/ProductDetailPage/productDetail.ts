// import { createHeader } from '../../components/heeder/header';
import { renderProduct } from '../../components/addToCart/addToCart';
import { fetchProduct } from '../../components/addToCart/addToCart';
// import { createFooter } from '../../components/footer/footer';

export async function renderProductDetailPage(
  productId: string,
): Promise<HTMLElement> {
  const product = await fetchProduct(productId);
  const page = await renderProduct(product);

  return page;
}
