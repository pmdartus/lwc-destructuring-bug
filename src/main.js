import { createElement } from 'lwc';
import App from 'x/app';

const root = createElement('x-app', { is: App });

setTimeout(() => {
    document.body.removeChild(root);
})

document.body.appendChild(root);


