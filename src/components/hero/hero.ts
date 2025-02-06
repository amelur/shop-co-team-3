import './hero.css';
import { renderButton } from '../buttons/button';

export function sectionHero(): string {
  const heroButton = renderButton('Shop Now', 'hero__button', '#categories');

  return `
    <section class="hero"> 
      <div class="hero__wrapper" id="hero">
        <h1 class="hero__title">
          FIND <span class="underline">ANYTHING</span> THAT MATCHES YOUR STYLE
        </h1>
        <p class="hero__subtitle">
          Browse through our diverse range of meticulously crafted garments, 
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <a href="#categories">${heroButton.outerHTML}</a>
        ${createHeroList()}
      </div>
      ${createHeroImage()}
    </section>
  `;
}

function createHeroList(): string {
  return `
    <div class="hero__list">
      ${createHeroItem('200+', 'International Brands')}
      <div class="hero__line"></div>
      ${createHeroItem('2,000+', 'High-Quality Products')}
      <div class="hero__line hero__line_none"></div>
      ${createHeroItem('30,000+', 'Happy Customers')}
    </div>
  `;
}

function createHeroItem(quantity: string, text: string): string {
  return `
    <div class="hero__item">
      <p class="hero__quantity">${quantity}</p>
      <p class="hero__text">${text}</p>
    </div>
  `;
}

function createHeroImage(): string {
  return `
    <div class="hero__img">
      <div class="rhombus rhombus_1"></div>
      <div class="rhombus rhombus_2"></div>
    </div>
  `;
}
