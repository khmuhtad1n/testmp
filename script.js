function checkout() {
    hideAll();
    document.getElementById('checkout').style.display = 'block';
}

function orderDetail() {
    hideAll();
    document.getElementById('orderDetail').style.display = 'block';
}

function generateInvoice() {
    hideAll();
    document.getElementById('invoice').style.display = 'block';
    // Disini kita akan melacak konversi (akan dijelaskan di bawah)
    trackConversion();
}

function hideAll() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('orderDetail').style.display = 'none';
    document.getElementById('invoice').style.display = 'none';
}
