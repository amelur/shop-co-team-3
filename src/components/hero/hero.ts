import './hero.css';
import { renderButton } from '../buttons/button';

function Hero(): string {
  const heroButton = renderButton('Shop Now', 'hero__button').outerHTML;

  const template = ` 
    <div class="hero__wrapper">
      <h1 class="hero__title">
        FIND <span class="underline">ANYTHING</span> THAT MATCHES YOUR STYLE
      </h1>
      <p class="hero__subtitle">Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.</p>
      ${heroButton}
      <div class="hero__list">
        <div class="hero__item">
          <p class="hero__quantity">200+</p>
          <p class="hero__text">International Brands</p>
        </div>
        <div class="line"></div>
        <div class="hero__item">
          <p class="hero__quantity">2,000+</p>
          <p class="hero__text">High-Quality Products</p>
        </div>
        <div class="line"></div>
        <div class="hero__item">
          <p class="hero__quantity">30,000+</p>
          <p class="hero__text">Happy Customers</p>
        </div>
      </div>
    </div>
    <div class="hero__img">
      <div class="rhombus rhombus_1"></div>
      <div class="rhombus rhombus_2"></div>
    </div>
  `;

  return template;
}

export function renderHero(): HTMLElement {
  const hero = document.createElement('section') as HTMLElement;
  hero.classList.add('hero');
  hero.innerHTML = Hero();
  return hero;
}


