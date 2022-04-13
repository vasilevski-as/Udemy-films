'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button')[3];
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);
const wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns.style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i <= hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }
hearts.forEach (i => {
    i.style.backgroundColor = 'blue';
});

 const div = document.createElement('div');
 const text = document.createTextNode('Hello');

 div.classList.add('black');
 wrapper.append(div);
//  wrapper.appendChild(div);
//  wrapper.prepend(div);

// wrapper.insertBefore(div, hearts[1]);

// hearts[1].before(div);
// hearts[1].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "<h1>Hello world</h1>"; //безопасность

div.insertAdjacentHTML('afterbegin', '<h2>hello</h2>');


