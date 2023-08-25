// This is the boilerplate code given for you
// You can modify this code
// Product data
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const cart = document.getElementById("cart");

  // Initialize cart from session storage
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
  cartItems.forEach(item => addToCart(item));

  // Add event listeners to product buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCartHandler);
  });

  function addToCartHandler(event) {
    const product = event.target.parentElement;
    const productId = product.getAttribute("data-id");
    const productName = product.textContent.split("-")[0].trim();
    const cartItem = { id: productId, name: productName };

    addToCart(cartItem);
    updateCartStorage();
  }

  function addToCart(item) {
    const li = document.createElement("li");
    li.textContent = item.name;
    cart.appendChild(li);
  }

  function updateCartStorage() {
    const cartItems = Array.from(cart.children).map(li => ({
      id: li.getAttribute("data-id"),
      name: li.textContent
    }));
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }
});

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {}

// Add item to cart
function addToCart(productId) {}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {}

// Initial render
renderProducts();
renderCart();
