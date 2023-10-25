let cart = [];
let uniqueDigits = Math.floor(Math.random() * 899) + 100;

function hideAll() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('orderDetail').style.display = 'none';
    document.getElementById('invoice').style.display = 'none';
}

function checkout() {
    hideAll();
    populateProducts();
    document.getElementById('checkout').style.display = 'block';
}

function populateProducts() {
    const products = [
        { name: "Produk Alpha", price: generateRandomProductPrice() },
        { name: "Produk Beta", price: generateRandomProductPrice() },
        { name: "Produk Gamma", price: generateRandomProductPrice() }
    ];
    const productList = document.getElementById('productList');
    productList.innerHTML = "";
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: IDR ${product.price.toLocaleString()}</p>
            <input type="number" value="1" id="quantity-${product.name}"/>
            <button onclick="addToCart('${product.name}', ${product.price})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productName, productPrice) {
    const quantity = parseInt(document.getElementById(`quantity-${productName}`).value);

    const productInCart = cart.find(product => product.name === productName);
    if (productInCart) {
        productInCart.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }
    alert(`${productName} telah ditambahkan ke keranjang.`);
}

function orderDetail() {
    hideAll();
    const detailsList = document.getElementById('orderDetailsList');
    detailsList.innerHTML = "";

    let total = 0;
    cart.forEach(product => {
        const productTotal = product.price * product.quantity;
        detailsList.innerHTML += `<p>${product.name} (IDR ${product.price.toLocaleString()} x ${product.quantity}) = IDR ${productTotal.toLocaleString()}</p>`;
        total += productTotal;
    });

    document.getElementById('totalPayment').innerText = total.toLocaleString();
    document.getElementById('orderDetail').style.display = 'block';
}

function generateInvoice() {
    hideAll();

    const invoiceNumber = `INV${new Date().getTime()}`;
    document.getElementById('invoiceNumber').innerText = invoiceNumber;

    const invoiceDetailsList = document.getElementById('invoiceDetailsList');
    invoiceDetailsList.innerHTML =
