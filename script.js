// Filter function
function filter(category){
    let cards = document.querySelectorAll('.card');
    cards.forEach(card=>{
        if(category === "all" || card.classList.contains(category)){
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// WhatsApp order function
function order(name, price, image, btn){
    const card = btn.parentElement;
    const qtyInput = card.querySelector('.qty');
    const qty = qtyInput.value;

    const total = qty * price;

    const message = `Hello! I want ${qty} x ${name}%0APrice per item: ₦${price}%0ATotal: ₦${total}%0APicture: ${image}`;
    const number = "2348105436891"; // change to seller number
    window.open(`https://wa.me/${number}?text=${message}`);
} 