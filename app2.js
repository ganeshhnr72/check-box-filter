// 'use strict';

// ///////////////////////////////////////
// const appleProducts = [
//   {
//     product: 'iPad Pro ',
//     price: 200,
//     img: './img/img1.jpg',
//   },
//   {
//     product: 'iPhone 14 Max Pro',
//     price: 800,
//     img: './img/img2.jpg',
//   },
//   {
//     product: 'Mac Book Pro',
//     price: 1000,
//     img: './img/img3.jpg',
//   },
//   {
//     product: 'Apple watch 5',
//     price: 500,
//     img: './img/img4.jpg',
//   },
//   {
//     product: 'Apple Vision Pro',
//     price: 3500,
//     img: './img/img5.jpg',
//   },
// ];

// const app = document.querySelector('.app');
// appleProducts.map(apple => {
//   const html = ` <div class="parent-class">
//         <div class="product">
//           <img src=${apple.img} />
//           <h3>${apple.product} <span class="price">Price ${apple.price}</span></h3>
//           <span class="cart-btn"
//             ><input type="number" value="1" class="cart-input" /><button
//               class="add-to-cart"
//             >
//               Cart
//             </button>
//           </span>
//         </div>
//       </div>`;
//   app.insertAdjacentHTML('beforeend', html);
// });

// let totalCart = 0;
// let cartAmount = 0;
// const cartObj = [];
// const cartBtn = document.querySelector('.cart');
// const cart = document.querySelectorAll('.add-to-cart');
// const inputValue = document.querySelectorAll('.cart-input');
// cartBtn.innerHTML = '🛒0';
// for (let i = 0; i < cart.length; i++) {
//   cart[i].addEventListener('click', e => {
//     e.preventDefault();
//     cartFun(cartObj, appleProducts, i);
//   });
// }

// const showCart = document.querySelector('.show-cart');
// cartBtn.addEventListener('click', e => {
//   e.preventDefault();
//   displayTotal(cartObj);
//   app.classList = 'hide';
//   showCart.classList = 'show';
//   cartObj.forEach(item => {
//     const html2 = ` <div class="product-cart">
//         <img src=${item.img} alt=${item.product} />
//           <input type="number" value=${item.qty} class="cart-input cart-input2" /><button
//             class="add-to-cart update-cart2"
//           >
//             Cart</button
//           ><span class="qty">QTY: X ${item.qty}</span><span class="price">Price ${item.price}</span>
//         </span>
//       </div>
//        `;
//     showCart.insertAdjacentHTML('beforeend', html2);
//     document.querySelector('.total-qty').innerHTML = `total qty: ${totalCart}`;
//     document.querySelector(
//       '.total-amount'
//     ).innerHTML = `total price: ${cartAmount}`;
//   });
//   ///////////////showing cart item
//   const totalitem = document.querySelector('.total-qty');
//   let totalQuantity;
//   const cart2update = document.querySelectorAll('.update-cart2');
//   const cartInput2 = document.querySelectorAll('.cart-input2');
//   let cartTot;
//   let total;
//   cart2update.forEach((button, i) => {
//     button.addEventListener('click', e => {
//       // e.preventDefault();
//       document.querySelectorAll('.qty')[
//         i
//       ].innerHTML = `QTY: X ${cartInput2[i].value}`;
//       ////////// total qty
//       cartObj[i].qty = Number(cartInput2[i].value);
//       cartObj[i].totalAmount = Number(cartInput2[i].value * cartObj[i].price);
//       cartTot = cartObj
//         .map(el => el.qty)
//         .reduce((accu, curr) => accu + curr, 0);
//       totalitem.innerHTML = `total qty: ${cartTot}
// `;
//       //////////// total amount
//       total = cartObj
//         .map(el => el.totalAmount)
//         .reduce((accu, curr) => accu + curr, 0);
//       document.querySelector(
//         '.total-amount'
//       ).innerHTML = `total price: ${total}`;
//       console.log(total);
//       console.log(cartObj);
//     });
//   });
// });

// function cartFun(cartObj, appleProducts, i) {
//   let duplicate = cartObj.some(
//     item => item.product === appleProducts[i].product
//   );

//   if (!duplicate) {
//     const cartItem = {
//       ...appleProducts[i],
//       qty: Number(inputValue[i].value),
//       totalAmount: Number(appleProducts[i].price) * Number(inputValue[i].value),
//     };
//     cartObj.push(cartItem);
//   } else {
//     cartObj[i].qty = Number(inputValue[i].value);
//     cartObj[i].totalAmount = Number(inputValue[i].value) * cartObj[i].price;
//     console.log(inputValue[i].value);
//   }
//   totalCartCount(cartObj);
// }
// function totalCartCount(cartObj) {
//   let totalCartCounts = cartObj
//     .map(total => total.qty)
//     .reduce((accu, curr) => accu + curr, 0);
//   cartBtn.innerHTML = `🛒${totalCartCounts}`;
// }

// function displayTotal(cartObj) {
//   totalCart = cartObj
//     .map(total => total.qty)
//     .reduce((accu, curr) => accu + curr, 0);
//   cartAmount = cartObj
//     .map(total => total.totalAmount)
//     .reduce((accu, curr) => accu + curr, 0);
// }

///////////////////trail two //////////
// 'use strict';

// ///////////////////////////////////////
// const appleProducts = [
//   {
//     product: 'iPad Pro ',
//     price: 200,
//     img: './img/img1.jpg',
//   },
//   {
//     product: 'iPhone 14 Max Pro',
//     price: 800,
//     img: './img/img2.jpg',
//   },
//   {
//     product: 'Mac Book Pro',
//     price: 1000,
//     img: './img/img3.jpg',
//   },
//   {
//     product: 'Apple watch 5',
//     price: 500,
//     img: './img/img4.jpg',
//   },
//   {
//     product: 'Apple Vision Pro',
//     price: 3500,
//     img: './img/img5.jpg',
//   },
// ];

const app = document.querySelector('.app');
appleProducts.map(apple => {
  const html = ` <div class="parent-class">
        <div class="product">
          <img src=${apple.img} />
          <h3>${apple.product} <span class="price">Price ${apple.price}</span></h3>
          <span class="cart-btn"
            ><input type="number" value="1" class="cart-input" /><button
              class="add-to-cart"
            >
              Cart
            </button>
          </span>
        </div>
      </div>`;
  app.insertAdjacentHTML('beforeend', html);
});

const cart = document.querySelectorAll('.add-to-cart');
const cartValue = document.querySelectorAll('.cart-input');
const cartObj = [];
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener('click', e => {
    e.preventDefault();
    console.log(cartValue[i].value);
    truth(i);
    console.log(cartObj);
  });
}

const showCart = document.querySelector('.show-cart');
document.querySelector('.cart').addEventListener('click', e => {
  e.preventDefault();
  app.classList = 'hide';
  showCart.classList = 'show';
  showTotal(cartObj);
});

function showTotal(cartObj) {
  cartObj.map((item, i) => {
    const cartTotal = cartObj
      .map(el => el.qty)
      .reduce((accu, curr) => accu + curr, 0);
    const cartTotalprice = cartObj
      .map(el => el.cost)
      .reduce((accu, curr) => accu + curr, 0);
    cartObj[i].cost = cartObj[i]?.qty * cartObj[i]?.price;
    const html2 = ` <div class="product-cart">
        <img src=${item.img} alt=${item.product} />
          <input type="number" value=${item.qty} class="cart-input cart-input2" /><button
            class="add-to-cart update-cart2" 
          >
            Cart</button
          ><span class="qty">QTY: X ${item.qty}</span><span class="price">Price ${item.price}</span>
        </span>
      </div>
      <div class="fixed-right-center">
        <h1 class="total-qty">total qty: ${cartTotal}</h1>
        <h1 class="total-amount">total price: ${cartTotalprice}</h1>
      </div>
       `;
    showCart.insertAdjacentHTML('beforeend', html2);
  });

  updatCart();
}

function truth(i) {
  const truthy = cartObj.some(el => el.product === appleProducts[i]?.product);
  if (!truthy) {
    const appleCartProd = {
      ...appleProducts[i],
      qty: Number(cartValue[i]?.value),
      cost: 0,
    };
    cartObj.push(appleCartProd);
  } else {
    cartObj[i].qty = Number(cartValue[i]?.value);
  }
  document.querySelector('.cart').innerHTML = ` 🛒 ${cartObj
    .map(el => el.qty)
    .reduce((accu, curr) => accu + curr, 0)}`;
}

function updatCart() {
  const cart2 = document.querySelectorAll('.update-cart2');
  const qty = document.querySelectorAll('.cart-input2');
  for (let i = 0; i < cart2.length; i++) {
    cart2[i].addEventListener('click', e => {
      e.preventDefault();

      cartObj[i].qty = Number(qty[i]?.value);
      console.log(cartObj);
      showCart.innerHTML = '';
      showTotal(cartObj);
    });
  }
}
