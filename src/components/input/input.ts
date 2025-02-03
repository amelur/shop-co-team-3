import './input.css';

// Функция создания инпута с текстом по умолчанию и стилем
export function createInput(placeholder: string, style: string = 'input', type: string = 'text'){
    const inp = document.createElement('input');
    inp.type = type;
    inp.placeholder = placeholder;
    inp.className = style;
    

    return inp;
} 