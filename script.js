// script.js
let cartCount = 0;

function addToCart(productName, productPrice) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);
}
