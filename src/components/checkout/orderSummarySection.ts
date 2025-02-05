import router from "../../router";
import "./orderSummarySection.css";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export async function getCartInformation(cartID: number = 10): Promise<Cart | null> {
  try {
    const res = await fetch(`https://dummyjson.com/carts/${cartID}`);
    if (!res.ok) throw new Error("Ошибка загрузки данных корзины");
    return await res.json();
  } catch (error) {
    console.error("Ошибка при получении данных о корзине:", error);
    return null;
  }
}

function createSection(className: string): HTMLElement {
  const section = document.createElement("div");
  section.className = className;
  return section;
}

function createItem(text: string, textStyle: string, price: string, priceStyle: string): HTMLElement {
  const div = document.createElement("div");
  div.className = "order-summary-item";

  const staticText = document.createElement("p");
  staticText.textContent = text;
  staticText.className = textStyle;

  const priceText = document.createElement("p");
  priceText.textContent = price;
  priceText.className = priceStyle;

  div.append(staticText, priceText);
  return div;
}

export function createOrderSummarySection(data: Cart | null): HTMLElement {
  if (!data) {
    const errorSection = createSection("orderSummarySection");
    errorSection.textContent = "Ошибка загрузки данных";
    return errorSection;
  }

  const discountInPercent = ((data.total - data.discountedTotal) / data.total) * 100;
  const section = createSection("orderSummarySection");

  const summaryTitle = document.createElement("h2");
  summaryTitle.textContent = "Order Summary";

  const separator = createSection("separator");

  const itemSubtotal = createItem("Subtotal", "grayStyle", `$${data.total.toFixed(2)}`, "blackBoldText");

  const button = document.createElement("button");
  button.textContent = "Go to Payment →";
  button.className = "buttonBlack";
  button.type = "submit";

  const routes: Record<string, string> = {
    "/cart": "/checkout",
    "/checkout": "/payment",
    "/payment": "/confirm",
  };

  button.addEventListener("click", (event: Event) => {
    // event.preventDefault();
    const nextPath = routes[window.location.pathname];
    if (nextPath) router.navigate(nextPath);
  });

  if (discountInPercent > 0) {
    const discountAmount = data.total - data.discountedTotal;
    const itemDiscount = createItem(
      `Discount (-${discountInPercent.toFixed(2)}%)`,
      "grayStyle",
      `-$${discountAmount.toFixed(2)}`,
      "redText"
    );
    const itemTotal = createItem("Total", "blackStyle", `$${data.discountedTotal.toFixed(2)}`, "blackBigBoldText");
    section.append(summaryTitle, itemSubtotal, itemDiscount, separator, itemTotal, button);
  } else {
    const itemTotal = createItem("Total", "blackStyle", `$${data.total.toFixed(2)}`, "blackBigBoldText");
    section.append(summaryTitle, itemSubtotal, separator, itemTotal, button);
  }

  return section;
}