import router from '../router';

export function cardHandler(): void {
  const cardsContainer = document.querySelector(
    '.categories__container',
  ) as HTMLElement;

  if (!cardsContainer) {
    console.error('Container not found');
    return;
  }

  cardsContainer.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as HTMLElement).closest(
      '.categories__card',
    ) as HTMLElement;
    if (target) {
      if (target.classList.contains('categories__card')) {
        const category = target.textContent?.trim() as string;
        router.navigate(`/category/${category}`);
      } else {
        console.error('Category not found in dataset');
      }
    }
  });
}

export function createAppTitle(title: string): HTMLElement {
  const appTitle = document.createElement('h1');
  appTitle.textContent = title;
  appTitle.className = 'app-title';
  return appTitle;
}
