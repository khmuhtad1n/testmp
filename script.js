function checkout() {
    hideAll();
    populateProducts();
    document.getElementById('checkout').style.display = 'block';
}

function populateProducts() {
    const productList = document.getElementById('productList');
    for(let i=0; i<3; i++) {
        const productName = generateRandomProductName();
        const productPrice = generateRandomProductPrice();
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${productName}</h3>
            <p>Harga: IDR ${productPrice.toLocaleString()}</p>
            <button onclick="addToCart('${productName}', ${productPrice})">Tambah ke Keranjang</button>
        `;
        productList.appendChild(productDiv);
    }
}

function orderDetail() {
    hideAll();
    document.getElementById('orderDetail').style.display = 'block';
}

function generateInvoice() {
    hideAll();
    document.getElementById('invoice').style.display = 'block';
}

function hideAll() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('orderDetail').style.display = 'none';
    document.getElementById('invoice').style.display = 'none';
}

function generateRandomProductName() {
    const names = ["Produk Alpha", "Produk Beta", "Produk Gamma"];
    return names[Math.floor(Math.random() * names.length)];
}

function generateRandomProductPrice() {
    return Math.floor(Math.random() * (1276500 - 124000 + 1)) + 124000;
}

function addToCart(productName, productPrice) {
    console.log(`Produk ${productName} dengan harga IDR ${productPrice.toLocaleString()} telah ditambahkan ke keranjang.`);
}
