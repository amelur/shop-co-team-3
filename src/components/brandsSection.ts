import '../styles/brandsSection.css';
import { Brand } from '../../src/assets/data/brandsData';
import { brandsData } from '../../src/assets/data/brandsData';

export function addBrandsSection(data: Brand[]) {
  const brandSection = document.createElement('section');
  brandSection.className = 'homePage_brandSection';

  data.forEach((item: Brand) => {
    // console.log(item);
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.title = item.brandName;

    const link = document.createElement('a');
    link.href = item.link;
    link.target = '_blank';
    link.appendChild(img);
    brandSection.appendChild(link);
  });

  return brandSection;
}

export function createBrandSection() {
  document.body.append(addBrandsSection(brandsData));
}
