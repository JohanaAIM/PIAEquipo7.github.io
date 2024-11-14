// script.js
let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsList.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });
    
    totalPriceElement.textContent = total.toFixed(2);
    
    // Actualizar el contador del carrito
    const cartLink = document.querySelector('.cart a');
    cartLink.textContent = `Carrito (${cart.length})`;
}

function showCart() {
    document.getElementById('cart-popup').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-popup').style.display = 'none';
}

function checkout() {
    alert(`El total de su compra es $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCartDisplay();
    closeCart();
}

