import './form.css';
import '/src/styles/base.css';

export function renderForm() {
  const newsletterForm = `
<section class="newsletter">
  <div class="newsletter-title">
    <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
  </div>
  <form class="newsletter-form">
    <div class="input-group">
      <span class="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.386 5.39a4 4 0 004.228 0L21 8m-18 8h18M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
        </svg>
      </span>
      <input type="email" class="newsletter-input" placeholder="Enter your email address" required>
    </div>
    <button type="submit" class="newsletter-button">Subscribe to Newsletter</button>
  </form>
</section>
`;
  return newsletterForm;
}

function showToast(message: string, type: 'success' | 'error') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

export function setupNewsletterForm(): void {
  const form = document.querySelector('.newsletter-form') as HTMLFormElement;
  const input = form?.querySelector('.newsletter-input') as HTMLInputElement;

  if (!form || !input) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = input.value.trim();

    if (!email.includes('@')) {
      showToast('❌ Enter a valid email', 'error');
      return;
    }

    
    setTimeout(() => {
      showToast('✅ Success! You\'ve subscribed to our newsletter.', 'success');
      form.reset();
    }, 1000);
  });
}
