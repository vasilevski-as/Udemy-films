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