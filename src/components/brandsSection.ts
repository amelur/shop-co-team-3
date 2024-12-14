// import styles from "../styles/brandsSection.css"
// import  brandsData  from "../../src/assets/data/brandsData.json"

const brandsData = "../../src/assets/data/brandsData.json";

export function addBrandsSection() {
    const brandSection = document.createElement("section");
    brandSection.className = "homePage_brandSection";

    // Загрузить JSON-файл
    fetch(brandsData)
    .then(response => response.json()) // Парсим JSON
    .then(data => {
    // Перебираем массив данных
    data.forEach((item: Object = {id: Number, src: String, alt: String, brandName: String, link: String}) => {
        console.log(item);
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
    })
    .catch(error => {
    console.error('Error loading JSON:', error);
    });

    document.body.append(brandSection);  
}