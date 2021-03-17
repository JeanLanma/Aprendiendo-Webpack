import test from './test1';
import test2 from './test2';

import cat from '../img/cat.jpg';

const img = document.createElement('img');
img.setAttribute('src', cat);

document.body.appendChild(img);

console.log(`${test},${test2}`);