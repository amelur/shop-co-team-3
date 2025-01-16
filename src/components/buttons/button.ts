import './button.css';

export function renderButton(
  text: string = '',
  className: string = '',
  url: string = '',
): HTMLElement {
  const button = document.createElement('button');
  button.classList.add('button');
  if (className) {
    button.classList.add(className);
  }
  button.textContent = text;

  if (url) {
    button.onclick = (): void => {
      window.location.href = url;
    };
  }

  return button;
}
