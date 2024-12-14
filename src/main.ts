// import { innerHTML } from './innerHTML';
// import locales from './locales.json' 

import { addBrandsSection } from "./components/brandsSection";

function initApp() {
    return new Promise((resolve) => {
        setTimeout(() => {
           
        }, 1000); 
      });
}

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    addBrandsSection();
});
