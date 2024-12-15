import { renderHero } from './components/hero/hero';

document.addEventListener('DOMContentLoaded', () => {
  renderPage();
});

function renderPage(): void {
  const body = document.body;
  body.innerHTML = '';
  body.appendChild(renderHero());
}