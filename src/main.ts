import router from './router';
import { createHeader } from './components/heeder/header';
import { createFooter } from './components/footer/footer';
import { setupNewsletterForm } from './components/footer/form';
import './styles/base.css';

document.addEventListener('DOMContentLoaded', () => {
  createHeader();
  router.resolve();
  createFooter(); 
  setupNewsletterForm(); 
});
