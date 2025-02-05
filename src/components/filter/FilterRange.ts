
import { getAllProducts } from "../../components/categoryCards/categoryCards";

export function initFilterFunctionality(): void {
  const minSlider = document.getElementById("price-min") as HTMLInputElement;
  const maxSlider = document.getElementById("price-max") as HTMLInputElement;
  const minPrice = document.getElementById("price-min-value") as HTMLElement;
  const maxPrice = document.getElementById("price-max-value") as HTMLElement;
  const rangeTrack = document.querySelector(".range-track") as HTMLElement;
  const applyButton = document.querySelector(".filters-apply-btn") as HTMLButtonElement;
  const resetButton = document.querySelector(".filters-reset-btn") as HTMLButtonElement;

  const updateRange = (): void => {
    minSlider.value = Math.min(+minSlider.value, +maxSlider.value - 1).toString();
    maxSlider.value = Math.max(+maxSlider.value, +minSlider.value + 1).toString();
    minPrice.textContent = `$${minSlider.value}`;
    maxPrice.textContent = `$${maxSlider.value}`;
    rangeTrack.style.setProperty("--min-percent", `${((+minSlider.value - +minSlider.min) / (+maxSlider.max - +minSlider.min)) * 100}%`);
    rangeTrack.style.setProperty("--range-width", `${((+maxSlider.value - +minSlider.min) / (+maxSlider.max - +minSlider.min)) * 100}%`);
  };

  const filterAndSortCards = (): void => {
    const allProducts = getAllProducts();
    const minVal = +minSlider.value;
    const maxVal = +maxSlider.value;
    const sortValue = (document.querySelector('input[name="sort"]:checked') as HTMLInputElement)?.value || "desc";
    
    const filtered = allProducts.filter(({ price, discountPercentage }) => {
      const discounted = price - (price * discountPercentage) / 100;
      return discounted >= minVal && discounted <= maxVal;
    });
    
    filtered.sort((a, b) => {
      const da = a.price - (a.price * a.discountPercentage) / 100;
      const db = b.price - (b.price * b.discountPercentage) / 100;
      return sortValue === "asc" ? da - db : db - da;
    });
    
    const container = document.querySelector(".category__cards") as HTMLElement;
    if (!container) return;
    container.innerHTML = "";
    
    filtered.forEach(({ id, images, title, price, discountPercentage }) => {
      const card = document.createElement("div");
      card.className = "category__card";
      card.id = String(id);
      card.innerHTML = `
        <img src="${images[0]}" alt="${title}" class="category__img">
        <h3 class="category__card-title">${title}</h3>
        <div class="category__card-price">
          <p>$${(price - (price * discountPercentage) / 100).toFixed(2)}</p>
          <p class="category__card-priceWithoutDiscount">$${price}</p>
          <p class="category__card-discountPercentage">${discountPercentage}%</p>
        </div>
      `;
      container.appendChild(card);
    });
  };

  const resetFilters = (): void => {
    minSlider.value = minSlider.min;
    maxSlider.value = maxSlider.max;
    (document.querySelector('input[value="desc"]') as HTMLInputElement).checked = true;
    updateRange();
    filterAndSortCards();
  };

  minSlider.addEventListener("input", updateRange);
  maxSlider.addEventListener("input", updateRange);
  applyButton.addEventListener("click", filterAndSortCards);
  resetButton.addEventListener("click", resetFilters);
  updateRange();
}