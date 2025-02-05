import "./input.css";
import "./checkoutForm.css";
import { createInput } from "../../components/input/input.ts";
import { createOrderSummarySection } from "./orderSummarySection.ts";

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

export async function getCartInformation(cartID: number = 1): Promise<Cart | null> {
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

export async function createCheckoutForm(cartID: number = 1): Promise<HTMLElement> {
  const checkoutFormSection = document.createElement("form");
  checkoutFormSection.classList.add("createCheckoutFormSection");

  const formSection = createSection("formSection");
  const fieldsSection = createSection("fieldsSection checkout");

  const inputs = [
    createInput("First name"),
    createInput("Last name"),
    createInput("Maiden name"),
    createSection("separator"),
    createInput("Email", "", "email"),
    createInput("Phone", "", "number"),
    createSection("separator"),
    createInput("Address"),
    createInput("City"),
    createInput("Postal code"),
  ];

  fieldsSection.append(...inputs);

  const data = await getCartInformation(cartID);
  const orderSummarySection = createOrderSummarySection(data);

  formSection.append(fieldsSection, orderSummarySection);
  checkoutFormSection.append(formSection);

  return checkoutFormSection;
}
