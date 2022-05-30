const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// });

// btn.addEventListener('click', (event) => {
//     // console.log(event.target);
//     event.target.remove();
//     // alert('Click');
// });

// let i = 0;
const del = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // event.target.remove();
    // alert('Click');
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', del);
    // }
};

btn.addEventListener('click', del);
overlay.addEventListener('click', del);
// btn.removeEventListener('click', del);