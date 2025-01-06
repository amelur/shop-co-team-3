import '../../styles/input.css';

// Функция создания инпута с текстом по умолчанию и стилем
export function createInput(placeholder: string, style: string = 'input'){
    const inp = document.createElement('input');
    inp.placeholder = placeholder;
    inp.className = style;
    return inp;
} 