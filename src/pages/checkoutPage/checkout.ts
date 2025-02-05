import "./checkout.css";
import { createCheckoutForm } from "../../components/checkout/checkoutForm";
import { createAppTitle } from "../../utils/DevHelper";
import "../../components/checkout/checkout.css";

export async function renderCheckoutPage(): Promise<HTMLElement> {
  const page = document.createElement("div");
  page.className = "checkoutPage";

  const title = createAppTitle("Checkout");
  const checkoutForm = await createCheckoutForm(5);

  page.append(title, checkoutForm);
  return page;
}
