"use strict";
// DOM öğelerini seçin
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
let count = 0;
// Artırma işlevi
function incrementCount() {
    count++;
    updateCount();
}
function decrementCount() {
    if (count > 0) {
        count--;
        updateCount();
    }
}
// Sayacı güncelleyen işlev
function updateCount() {
    if (countElement) {
        countElement.textContent = count.toString();
    }
}
// Artırma ve azaltma düğmelerine tıklama olayları ekleyin
if (incrementButton) {
    incrementButton.addEventListener("click", incrementCount);
}
if (decrementButton) {
    decrementButton.addEventListener("click", decrementCount);
}
// Başlangıçta sayacı güncelleyin
updateCount();
