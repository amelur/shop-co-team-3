import "./productImages.css";

export async function getImagesInformation (productID: number = 56): Promise<any> {
    const response = await fetch('https://dummyjson.com/products/'+productID);
    const data = await response.json();
    return data;
}

function createImageSection (imageUrl: string): HTMLElement{
    const section = document.createElement('section');
    section.classList.add('product-images');
    const image = document.createElement('img');
    image.src = imageUrl;
    section.appendChild(image);
    return section;
}

export async function createProductImagesSection(productID: number = 56): HTMLElement {
    const productImagesSection = document.createElement('section');
    productImagesSection.classList.add('product-images-section');

    const littleSection = document.createElement('section');
    littleSection.classList.add('product-images');

    const data = await getImagesInformation(productID);
    //console.log(data);
    const img0 = createImageSection(data.images[0]);
    img0.classList.add('product-image-selected');
    littleSection.append(img0);

    if (data.images.length >= 2) {
        const img1 = createImageSection(data.images[1]);
        img1.classList.add('product-little-images');
        littleSection.append(img1);
    }
    if (data.images.length >= 3) {
        const img2 = createImageSection(data.images[2]);
        img2.classList.add('product-little-images');
        littleSection.append(img2);
    }
 
    const img4 = createImageSection(data.images[0]);
    img4.classList.add('product-big-images');


    productImagesSection.append(littleSection, img4);
    return productImagesSection;
}