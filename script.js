let cart = [];
const uniqueDigits = Math.floor(Math.random() * 899) + 100;

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
        { name: "Produk Alpha", price: 1260000 },
        { name: "Produk Beta", price: 1250000 },
        { name: "Produk Gamma", price: 1245000 }
    ];
    
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Harga: IDR ${product.price.toLocaleString()}</p>
            <input type="number" value="1" id="quantity-${product.name}" min="1"/>
            <button onclick="addToCart('${product.name}', ${product.price})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productName, productPrice) {
    const quantity = parseInt(document.getElementById(`quantity-${productName}`).value);

    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }
    alert(`${productName} telah ditambahkan ke keranjang dengan jumlah ${quantity}.`);
}

function orderDetail() {
    hideAll();
    populateOrderDetails();
    document.getElementById('orderDetail').style.display = 'block';
}

function populateOrderDetails() {
    const detailsDiv = document.getElementById('orderDetailsList');
    detailsDiv.innerHTML = "";
    
    let total = 0;
    cart.forEach(item => {
        detailsDiv.innerHTML += `<p>${item.name} - IDR ${item.price.toLocaleString()} x ${item.quantity} = IDR ${(item.price * item.quantity).toLocaleString()}</p>`;
        total += item.price * item.quantity;
    });
    
    document.getElementById('totalPayment').innerText = total.toLocaleString();
}

function generateInvoice() {
    hideAll();

    const invoiceNum = `INV${new Date().getTime()}`;
    document.getElementById('invoiceNumber').innerText = invoiceNum;

    let total = 0;
    cart.forEach(product => {
        total += product.price * product.quantity;
    });

    const finalPayment = total + uniqueDigits;
    document.getElementById('finalPayment').innerText = finalPayment.toLocaleString();
    
    document.getElementById('invoice').style.display = 'block';
}

function generateInvoice() {
    ...
    // Tambahkan kode berikut untuk mengirimkan event ke GA4
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'generate_invoice',
        'value': finalPayment
    });
    ...
}
