let itemCount = 1;
let totalPrice = 0;

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function () {
        // get title
        const title = card.querySelector('h3').innerText;
        // get price
        const price = card.querySelector("span").innerText.split(" ")[1];
        const convertedPrice = parseInt(price);
        // get title container
        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = itemCount + ". " + title + "  = " + price;
        titleContainer.appendChild(p);
        itemCount++;

        // calculate total price
        totalPrice += convertedPrice;

        // get total price 
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

    })
}

const apply = document.getElementById('apply-btn');
apply.addEventListener('click', function () {
    const inputFiled = document.getElementById('input-field').value;
    const couponCode = inputFiled.split(' ').join('').toUpperCase();
    if(totalPrice >= 200){
        if(couponCode === "SELL200"){
            const discountElement = document.getElementById('discountPrice');
            const discountPrice = totalPrice * 0.20;
            discountElement.innerText = discountPrice.toFixed(2)
            // get grand total 
            const grandTotalElement = document.getElementById('total');
            const grandTotal = totalPrice - discountPrice;
            grandTotalElement.innerText = grandTotal.toFixed(2);
            document.getElementById('input-field').value = "";
        }
        else{
            alert('Invalid coupon code')
        }
    }
    else{
        alert("Please purchase more then 200")
    }
    
})