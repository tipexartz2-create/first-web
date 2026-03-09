// Add to Cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, price: price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}

// Load Cart Items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        total += parseInt(item.price);

        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - UGX ${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: UGX " + total;
}

// Remove Item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// WhatsApp Checkout
function checkoutWhatsApp() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let message = "Hello West Nile Online Shop,%0A I want to order:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        message += item.name + " - UGX " + item.price + "%0A";
        total += parseInt(item.price);
    });

    message += "%0A Total: UGX " + total;

    let phone = "256761680128"; // your WhatsApp number
    let url = "https://wa.me/" + phone + "?text=" + message;

    window.open(url, "_blank");
}