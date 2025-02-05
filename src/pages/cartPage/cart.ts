import "./cart.css";
import { createCart } from "../../components/yourcart/yourcart";
import { getCartInformation, createOrderSummarySection } from "../../components/checkout/orderSummarySection";
import { createAppTitle } from "../../utils/DevHelper";

export async function renderCartPage(): Promise<HTMLElement> {
  const page = document.createElement("div");
  page.className = "cartPage";

  const title = createAppTitle("Your cart");
  const cartPageWrapper = document.createElement("div");
  cartPageWrapper.className = "cartPageWrapper";

  const [carts, data] = await Promise.all([createCart(), getCartInformation(3)]);
  const orderSummarySection = createOrderSummarySection(data);

  cartPageWrapper.append(carts, orderSummarySection);
  page.append(title, cartPageWrapper);

  return page;
}
