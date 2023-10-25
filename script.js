let selectedProduct = null;
let quantity = 0;
let totalAmount = 0;

function selectProduct(productElement) {
    const name = productElement.getAttribute("data-name");
    const price = parseFloat(productElement.getAttribute("data-price"));
    quantity = prompt("Masukkan jumlah untuk " + name, "1");
    if (quantity) {
        selectedProduct = { name, price, quantity: parseInt(quantity) };
    }
}

function checkout() {
    if (!selectedProduct) {
        alert("Silakan pilih produk terlebih dahulu.");
        return;
    }

    totalAmount = selectedProduct.price * selectedProduct.quantity;
    const orderDetailElement = document.getElementById("orderDetails");
    orderDetailElement.innerHTML = `
        <h2>Detail Pesanan</h2>
        Nama Produk: ${selectedProduct.name}<br>
        Harga Satuan: Rp${selectedProduct.price.toLocaleString()}<br>
        Jumlah: ${selectedProduct.quantity}<br>
        Total Harga: Rp${totalAmount.toLocaleString()}<br>
        <button onclick="generateInvoice()">Buat Invoice</button>
    `;
}

function generateInvoice() {
    const uniqueDigits = Math.floor(100 + Math.random() * 900);
    const finalPayment = totalAmount + uniqueDigits;
    const invoiceNumber = "INV" + new Date().getTime();

    const invoiceDetailElement = document.getElementById("invoiceDetails");
    invoiceDetailElement.innerHTML = `
        <h2>Invoice</h2>
        Nomor Invoice: ${invoiceNumber}<br>
        Total Pembayaran (termasuk 3 digit unik): Rp${finalPayment.toLocaleString()}<br>
        Cara Pembayaran: Transfer
    `;

    // Kirim event ke GA melalui GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'generate_invoice',
        'value': finalPayment
    });
}
