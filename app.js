'use strict';

///////////////////////////////////////
const techProducts = [
  {
    brand: 'apple',
    price: 200,
    img: './img/img1.jpg',
  },
  {
    brand: 'samsung',
    price: 800,
    img: './img/img2.jpg',
  },
  {
    brand: 'sony',
    price: 1000,
    img: './img/img3.jpg',
  },
  {
    brand: 'motorola',
    price: 500,
    img: './img/img4.jpg',
  },
  {
    brand: 'apple',
    price: 3500,
    img: './img/img5.jpg',
  },
];

const app = document.getElementById('app');
function techProductDisplay(techProduct) {
  techProduct.forEach((brand, i) => {
    const html = `<div class=${brand.brand}>
        <img src=${brand.img} alt=${brand.brand} />
        <h2>${brand.brand}</h2>
      </div>`;
    app.insertAdjacentHTML('beforeend', html);
  });
}
techProductDisplay(techProducts);
const input = document.querySelectorAll('input');
let listed = [];
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('change', e => {
    e.preventDefault();
    let checkedStates = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (checkedStates.length > 0) {
      let state = input[i].checked;
      if (state) {
        listed.push(...techProducts.filter(e => e.brand === input[i].value));

        app.innerHTML = '';
        techProductDisplay(listed);
      } else if (!state) {
        listed = listed.filter(e => e.brand !== input[i].value);
        app.innerHTML = '';
        console.log(listed);
        techProductDisplay(listed);
      }
    } else {
      app.innerHTML = '';
      listed = [];
      techProductDisplay(techProducts);
    }
  });
}
