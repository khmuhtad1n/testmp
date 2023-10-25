document.addEventListener("DOMContentLoaded", function() {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    const totalAmount = parseFloat(localStorage.getItem("totalAmount"));
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
});
