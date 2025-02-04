
export function initFilterFunctionality() {
    const minSlider = document.getElementById('price-min') as HTMLInputElement;
    const maxSlider = document.getElementById('price-max') as HTMLInputElement;
    const minPrice = document.getElementById('price-min-value') as HTMLElement;
    const maxPrice = document.getElementById('price-max-value') as HTMLElement;
    const rangeTrack = document.querySelector('.range-track') as HTMLElement;
    const resetButton = document.querySelector('.filters-reset-btn') as HTMLElement;

  
    const updateRange = () => {
      const min = parseInt(minSlider.value, 10);
      const max = parseInt(maxSlider.value, 10);


      if (min >= max) {
        minSlider.value = (max - 1).toString();
    }

    if (max <= min) {
        maxSlider.value = (min + 1).toString();
    }

  
      const minPercent = ((min - parseInt(minSlider.min)) / (parseInt(minSlider.max) - parseInt(minSlider.min))) * 100;
      const maxPercent = ((max - parseInt(minSlider.min)) / (parseInt(minSlider.max) - parseInt(minSlider.min))) * 100;
  
      // Обновляем значения
      minPrice.textContent = `$${min}`;
      maxPrice.textContent = `$${max}`;
  
      // Устанавливаем CSS-переменные
      rangeTrack.style.setProperty('--min-percent', `${minPercent}%`);
      rangeTrack.style.setProperty('--range-width', `${maxPercent - minPercent}%`);
    };
    
    const resetFilters = () => {
        minSlider.value = minSlider.min; // Сбрасываем к минимальному значению
        maxSlider.value = maxSlider.max; // Сбрасываем к максимальному значению
        updateRange();
    };

    minSlider.addEventListener('input', updateRange);
    maxSlider.addEventListener('input', updateRange);
    resetButton.addEventListener('click', resetFilters); 

    updateRange();
  }
  



  