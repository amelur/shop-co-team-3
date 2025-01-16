export function cardHandler(): void {
  const cardsContainer = document.querySelector(
    '.categories__container',
  ) as HTMLElement;
  console.log(cardsContainer);

  if (!cardsContainer) {
    console.error('Container not found');
    return;
  }

  cardsContainer.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('categories__card')) {
      const category = target.textContent?.trim() as string;
      window.location.href = `./src/pages/CategoryPage/categoryPage.html?category=${category}`;
    }
  });
}
