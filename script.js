let favs = Array.from(document.querySelectorAll(".fa-heart"))  
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"))
let cards = Array.from(document.querySelectorAll(".card"))
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"))
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"))
let totalPrice = document.querySelector(".total-price")









//favorite PArt
for (let fav of favs){
    fav.addEventListener("click",function(){
        if (fav.getElementsByClassName.color==='red'){
         fav.style.color ='#000000' } else {
              fav.style.color = 'red'}
    })
}
//delete card
for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function () {
        // deleteBtns[i].parentNode.parentNode.parentNode.remove()
        cards[i].remove()
        total()
    })
}
//add button
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        total()
    })
}

//minus button

for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null;
        total()
    })

}
function total() {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let s = 0;
    for (let i in unitPrices) {
        s = s + (+unitPrices[i].innerHTML) * (+quantities[i].innerHTML)
    }
    totalPrice.innerHTML = s
}