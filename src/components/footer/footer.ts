import './footer.css';
// import '../styles/base.css';
import { renderForm } from './form';

export function createFooter() {
  const footer = document.createElement('footer');
  // footer.innerHTML+=(renderForm());
  // Вставляем HTML-контент внутрь этого элемента
  footer.innerHTML += `
  <footer>

  <div class="footer__wrapper">
      <div class="footer__title">
        
        
          <h2 class="footer__title-text">SHOP.CO</h2>

          <p class="footer__title-description">
            We have clothes that suits your style<br>
            and which you’re proud to wear. From<br>
            women to men.
          </p> 
      

        <div class="footer__images-container">
          <a href="https://www.twitter.com" target="_blank" class="footer__social-link">
            <img src="/src/assets/icons/twitter.svg" alt="twitter" class="footer__social-icon">
          </a>
          <a href="https://www.facebook.com" target="_blank" class="footer__social-link">
            <img src="/src/assets/icons/facebook.svg" alt="facebook" class="footer__social-icon">
          </a>
          <a href="https://www.instagram.com" target="_blank" class="footer__social-link">
            <img src="/src/assets/icons/instagram.svg" alt="instagram" class="footer__social-icon">
          </a>
          <a href="https://www.github.com" target="_blank" class="footer__social-link">
            <img src="/src/assets/icons/GitHub.svg" alt="github" class="footer__social-icon">
          </a>
        </div>

      </div>



    <div class="footer__info-block">

      <div class="footer__company">
        <h4 class="footer__heading">C O M P A N Y</h4>
        <a href="about" class="footer__link">About</a>
        <a href="features" class="footer__link">Features</a>
        <a href="works" class="footer__link">Works</a>
        <a href="career" class="footer__link">Career</a>
      </div>

      <div class="footer__help">
        <h4 class="footer__heading">H E L P</h4>
        <a href="customerSupport" class="footer__link">Customer Support</a>
        <a href="deliveryDetails" class="footer__link">Delivery Details</a>
        <a href="terms&Conditions" class="footer__link">Terms & Conditions</a>
        <a href="privacyPolicy" class="footer__link">Privacy Policy</a>
      </div>

      <div class="footer__faq">
        <h4 class="footer__heading">F A Q</h4>
        <a href="account" class="footer__link">Account</a>
        <a href="manageDeliveries" class="footer__link">Manage Deliveries</a>
        <a href="orders" class="footer__link">Orders</a>
        <a href="payments" class="footer__link">Payments</a>
      </div>

      <div class="footer__resources">
        <h4 class="footer__heading">R E S O U R C E S</h4>
        <a href="freeeBooks" class="footer__link">Free eBooks</a>
        <a href="developmentTutorial" class="footer__link">Development Tutorial</a>
        <a href="howto-Blog" class="footer__link">How to - Blog</a>
        <a href="youtubePlaylist" class="footer__link">Youtube Playlist</a>
      </div>

    </div>
   </div> 

    
    <hr class="footer__hr">


    <div class="under__hr">

    <p class="footer__copyright">Shop.co © 2000-2023, All Rights Reserved</p>

    <div class="footer__credit-cards">
      <a href="https://www.visa.com" target="_blank" class="footer__credit-link">
        <img src="/src/assets/icons/VISA.svg" alt="VISA" class="footer__credit-icon">
      </a>
      <a href="https://www.mastercard.com" target="_blank" class="footer__credit-link">
        <img src="/src/assets/icons/Mastercard.svg" alt="Mastercard" class="footer__credit-icon">
      </a>
      <a href="https://www.paypal.com" target="_blank" class="footer__credit-link">
        <img src="/src/assets/icons/PayPal.svg" alt="PayPal" class="footer__credit-icon">
      </a>
      <a href="https://www.apple.com/apple-pay/" target="_blank" class="footer__credit-link">
        <img src="/src/assets/icons/ApplePay.svg" alt="ApplePay" class="footer__credit-icon">
      </a>
      <a href="https://pay.google.com" target="_blank" class="footer__credit-link">
        <img src="/src/assets/icons/GooglePay.svg" alt="GooglePay" class="footer__credit-icon">
      </a>
    </div>
   </div>

    </footer>
  `;

  
  document.body.append(footer);
}
