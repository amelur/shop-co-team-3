import "./brandsSection.css";

export interface Brand {
  id: number;
  src: string;
  alt: string;
  brandName: string;
  link: string;
}

export const brandsData: Brand[] = [
  { id: 0, brandName: "Versace", src: "../../src/assets/images/brandVersace.png", alt: "Versace brand image", link: "./src/pages/CategoryPage/categoryPage.html" },
  { id: 1, brandName: "Zara", src: "../../src/assets/images/brandZara.png", alt: "Zara brand image", link: "" },
  { id: 2, brandName: "Gucci", src: "../../src/assets/images/brandGucci.png", alt: "Gucci brand image", link: "" },
  { id: 3, brandName: "Prada", src: "../../src/assets/images/brandPrada.png", alt: "Prada brand image", link: "" },
  { id: 4, brandName: "Calvin Klein", src: "../../src/assets/images/brandCalvin_Klein.png", alt: "Calvin Klein brand image", link: "" },
];

export function createBrandSection(): string {
  return `
    <section class="homePage_brandSection">
      ${brandsData.map(createBrandItem).join("")}
    </section>
  `;
}

function createBrandItem(brand: Brand): string {
  return `
    <a href="${brand.link}" target="_blank">
      <img src="${brand.src}" alt="${brand.alt}" title="${brand.brandName}" class="brandImg" />
    </a>
  `;
}
