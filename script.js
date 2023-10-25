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

function proceedToInvoice() {
    if (!selectedProduct) {
        alert("Silakan pilih produk terlebih dahulu.");
        return;
    }

    totalAmount = selectedProduct.price * selectedProduct.quantity;
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    localStorage.setItem("totalAmount", totalAmount.toString());
    window.location.href = "invoice.html";
}
