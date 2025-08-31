// 1. List of products (like items in a shop)
const products = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Banana", price: 10 },
  { id: 3, name: "Mango", price: 30 }
];

// 2. Cart array (will hold selected products)
let cart = [];

// 3. Load cart from localStorage (if already saved before refresh)
if (localStorage.getItem("cart")) {
  // JSON.parse = string → object
  cart = JSON.parse(localStorage.getItem("cart"));
}

// 4. Function to display products
function displayProducts() {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productDiv.appendChild(div);
  });
}

// 5. Function to add item to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  // Save cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

// 6. Function to display cart
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);

    total += item.price;
  });

  document.getElementById("totalPrice").textContent = total;
}

// 7. Initial call
displayProducts();
displayCart();
