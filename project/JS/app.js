// Cart functionality
const cart = [];
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalSpan = document.getElementById('cartTotal');
const cartModal = document.getElementById('cartModal');

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name}:- jersey is added.`);
}


function updateCart() {
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.textContent = `${item.name} - ₹${item.price}`;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });
  cartTotalSpan.textContent = total;
}

function toggleCart() {
  cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Optional: Close cart when clicking outside
window.addEventListener('click', function(e) {
  if (!cartModal.contains(e.target) && !e.target.closest('a[href="#"]')) {
    cartModal.style.display = 'none';
  }
});
