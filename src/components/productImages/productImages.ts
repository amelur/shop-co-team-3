// import "./productImages.css";

// export async function getImagesInformation (productID: number = 56): Promise<any> {
//     const response = await fetch('https://dummyjson.com/products/'+productID);
//     const data = await response.json();
//     return data;
// }

// function createImageSection (imageUrl: string): HTMLElement{
//     const section = document.createElement('section');
//     section.classList.add('product-images');
//     const image = document.createElement('img');
//     image.src = imageUrl;
//     section.appendChild(image);
//     return section;
// }

// export async function createProductImagesSection(productID: number = 56): HTMLElement {
//     const productImagesSection = document.createElement('section');
//     productImagesSection.classList.add('product-images-section');

//     const littleSection = document.createElement('section');
//     littleSection.classList.add('product-images');

//     const data = await getImagesInformation(productID);
//     //console.log(data);
//     const img0 = createImageSection(data.images[0]);
//     img0.classList.add('product-image-selected');
//     littleSection.append(img0);

//     if (data.images.length >= 2) {
//         const img1 = createImageSection(data.images[1]);
//         img1.classList.add('product-little-images');
//         littleSection.append(img1);
//     }
//     if (data.images.length >= 3) {
//         const img2 = createImageSection(data.images[2]);
//         img2.classList.add('product-little-images');
//         littleSection.append(img2);
//     }

//     const img4 = createImageSection(data.images[0]);
//     img4.classList.add('product-big-images');

//     productImagesSection.append(littleSection, img4);
//     return productImagesSection;
// }

import './productImages.css';

interface ProductData {
  images: string[];
}

export async function getImagesInformation(
  productID: number = 56,
): Promise<ProductData> {
  const response = await fetch(`https://dummyjson.com/products/${productID}`);
  if (!response.ok) throw new Error('Failed to fetch product images');
  return response.json();
}

function createImageElement(
  imageUrl: string,
  className: string,
): HTMLImageElement {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.classList.add(className);
  return image;
}

export async function createProductImagesSection(
  productID: number = 56,
): Promise<HTMLElement> {
  const productImagesSection = document.createElement('div');
  productImagesSection.classList.add('product-images-section');

  const littleSection = document.createElement('div');
  littleSection.classList.add('product-images');

  const data = await getImagesInformation(productID);
  if (!data.images.length) throw new Error('No images found for this product');

  const mainImage = createImageElement(
    data.images[0],
    'product-image-selected',
  );
  littleSection.appendChild(mainImage);

  data.images.slice(1, 3).forEach((imageUrl) => {
    littleSection.appendChild(
      createImageElement(imageUrl, 'product-little-images'),
    );
  });

  const bigImage = createImageElement(data.images[0], 'product-big-images');
  productImagesSection.append(littleSection, bigImage);

  return productImagesSection;
}
