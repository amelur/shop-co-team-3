import './button.css';

export function renderButton(
  text: string = '',
  className: string = '',
): HTMLElement {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(className);
  button.textContent = text;
  return button;
}
