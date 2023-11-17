// Cart
let cartBtn = document.querySelector("#cart-btn");
let trash = document.querySelector(".trash");
let cartItems = document.querySelector(".cart-box");
let trash1 = document.querySelector(".trash1");
let cartItems1 = document.querySelector(".cart-box1");
let trash2 = document.querySelector(".trash2");
let cartItems2 = document.querySelector(".cart-box2");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
let buyBtn = document.querySelector(".btn-buy");
let adImg = document.querySelector(".ad-img");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
let rightArrow1 = document.querySelector(".right-arrow1");
let itemsPrice = document.querySelector(".cart-price").id;
let itemsPrice1 = document.querySelector(".cart-price1").id;
let itemsPrice2 = document.querySelector(".cart-price2").id;

let totalPrice = document.querySelector(".total-price");
let addCart = document.querySelector('.add-cart');
let addCart1 = document.querySelector('.add-cart1');
let addCart2 = document.querySelector('.add-cart2');

cartBtn.onclick = () => {
    cart.classList.add("active");
    cartBtn.classList.add('deactivate')
    calculate()
};
function calculate() {
    let quantity = document.querySelector(".cart-quantity").value;
    let quantity1 = document.querySelector(".cart-quantity1").value;
    let quantity2 = document.querySelector(".cart-quantity2").value;
    let total = parseInt(quantity) * parseInt(itemsPrice) + parseInt(quantity1) * parseInt(itemsPrice1) + parseInt(quantity2) * parseInt(itemsPrice2)  ;
    totalPrice.innerHTML = total +  'FCFA';
};

closeCart.onclick = () => {
    cart.classList.remove("active");
    cartBtn.classList.remove('deactivate');
};
// A revoir
addCart.onclick = () => {
    cart.classList.add("active");
}
// A revoir
addCart1.onclick = () => {
    cart.classList.add("active");
}
// A revoir
addCart2.onclick = () => {
    cart.classList.add("active");
}

trash.onclick = () => {
    // btnBuy.classList.add('deactivate');
    cartItems.classList.add('deactivate');
    let itemsPrice = document.querySelector(".cart-price").id;
    let number = document.querySelector(".cart-quantity").value;
    let total = parseInt(number) * parseInt(itemsPrice);
    let totalInt = totalPrice.innerHTML;
    let totalString =  parseInt(totalInt) - total;
    totalPrice.innerHTML = totalString + 'FCFA';

}
trash1.onclick = () => {
    cartItems1.classList.add('deactivate');
    let quantity1 = document.querySelector(".cart-quantity1").value;
    let total = parseInt(quantity1) * parseInt(itemsPrice1);
    let totalInt = totalPrice.innerHTML;
    let totalString =  parseInt(totalInt) - total;
    totalPrice.innerHTML = totalString.toString() + 'FCFA';

}
trash2.onclick = () => {
    cartItems2.classList.add('deactivate');
    let itemsPrice2 = document.querySelector(".cart-price2").id;
    let quantity2 = document.querySelector(".cart-quantity2").value;
    let total = parseInt(quantity2) * parseInt(itemsPrice2);
    let totalInt = totalPrice.innerHTML;
    let totalString =  parseInt(totalInt) - total;
    totalPrice.innerHTML = totalString.toString() + 'FCFA';

   

}




function changeAd() {
    adImg.src = '/static/img/ad1.png';
};
var id = setInterval('changeAd();', 10000); 

function changeAd1(){
    adImg.src = '/static/img/ad2.png';
};
var id1 = setInterval('changeAd1();', 9000); 

function changeAd2(){
    adImg.src = '/static/img/ad3.png';
};
var id2 = setInterval('changeAd2();', 8000); 

leftArrow.onclick = () => {
    adImg.src = '/static/img/ad1.png';
    clearInterval(id);
    clearInterval(id1);
    clearInterval(id2);
};

rightArrow.onclick = () => {
    adImg.src = '/static/img/ad2.png';
    clearInterval(id);
    clearInterval(id1);
    clearInterval(id2);

};
rightArrow1.onclick = () => {
    adImg.src = '/static/img/ad3.png';
    clearInterval(id);
    clearInterval(id1);
    clearInterval(id2);

};


