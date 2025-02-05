import { getAllProducts } from '../../components/categoryCards/categoryCards';

export function initFilterFunctionality() {
  const minSlider = document.getElementById('price-min') as HTMLInputElement;
  const maxSlider = document.getElementById('price-max') as HTMLInputElement;
  const minPrice = document.getElementById('price-min-value') as HTMLElement;
  const maxPrice = document.getElementById('price-max-value') as HTMLElement;
  const rangeTrack = document.querySelector('.range-track') as HTMLElement;

  const applyButton = document.querySelector('.filters-apply-btn') as HTMLButtonElement;
  const resetButton = document.querySelector('.filters-reset-btn') as HTMLButtonElement;

  const updateRange = () => {
    const minVal = parseInt(minSlider.value, 10);
    const maxVal = parseInt(maxSlider.value, 10);

    if (minVal >= maxVal) {
      minSlider.value = String(maxVal - 1);
    }
    if (maxVal <= minVal) {
      maxSlider.value = String(minVal + 1);
    }

    minPrice.textContent = `$${minSlider.value}`;
    maxPrice.textContent = `$${maxSlider.value}`;

    const totalRange = parseInt(minSlider.max) - parseInt(minSlider.min);
    const minPercent = ((parseInt(minSlider.value) - parseInt(minSlider.min)) / totalRange) * 100;
    const maxPercent = ((parseInt(maxSlider.value) - parseInt(minSlider.min)) / totalRange) * 100;

    rangeTrack.style.setProperty('--min-percent', `${minPercent}%`);
    rangeTrack.style.setProperty('--range-width', `${maxPercent - minPercent}%`);
  };

  function filterAndSortCards() {
    const allProducts = getAllProducts();

    const minVal = parseInt(minSlider.value, 10);
    const maxVal = parseInt(maxSlider.value, 10);

    //Смотрим, какое значение возраст/убыв выбрано
    const sortValue = (document.querySelector('input[name="sort"]:checked') as HTMLInputElement | null)?.value || 'desc';

    //Фильтруем исходный массив
    let filtered = allProducts.filter((p) => {
      const discounted = p.price - (p.price * p.discountPercentage) / 100;
      return discounted >= minVal && discounted <= maxVal;
    });

    //Сортируем по возрастанию или убыванию
    if (sortValue === 'asc') {
      filtered.sort((a, b) => {
        const da = a.price - (a.price * a.discountPercentage) / 100;
        const db = b.price - (b.price * b.discountPercentage) / 100;
        return da - db;
      });
    } else {
      filtered.sort((a, b) => {
        const da = a.price - (a.price * a.discountPercentage) / 100;
        const db = b.price - (b.price * b.discountPercentage) / 100;
        return db - da;
      });
    }

    //Находим контейнер, куда вставлять карточки
    const container = document.querySelector('.category__cards') as HTMLElement;
    if (!container) return;

    container.innerHTML = '';

    //Генерируем/добавляем новые карточки 

    filtered.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'category__card';
      card.id = String(product.id);

      const img = document.createElement('img');
      img.src = product.images[0];
      img.alt = product.title;
      img.className = 'category__img';

      const title = document.createElement('h3');
      title.className = 'category__card-title';
      title.textContent = product.title;

      //высчитываем цену со скидкой
      const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

      const priceDiv = document.createElement('div');
      priceDiv.className = 'category__card-price';
      priceDiv.innerHTML = `<p>$${discountedPrice.toFixed(2)}</p>
                            <p class="category__card-priceWithoutDiscount">$${product.price}</p>
                            <p class="category__card-discountPercentage">${product.discountPercentage}%</p>`;
      card.append(img, title, priceDiv);

      container.append(card);
    });
  }

  //Функция Reset
  const resetFilters = () => {
    // Сбрасываем ползунки в исходные значения
    minSlider.value = minSlider.min;
    maxSlider.value = maxSlider.max;

    const descRadio = document.querySelector('input[value="desc"]') as HTMLInputElement;
    if (descRadio) descRadio.checked = true;

    // Обновляем визуал
    updateRange();

    // Перерисовываем все товары
    filterAndSortCards();
  };


  // Обновляем ползунок по движению
  minSlider.addEventListener('input', updateRange);
  maxSlider.addEventListener('input', updateRange);

  applyButton.addEventListener('click', () => {
    filterAndSortCards();
  });

  resetButton.addEventListener('click', () => {
    resetFilters();
  });

  updateRange();
}

  