// DOM öğelerini seçin
const countElement: HTMLElement | null = document.getElementById("count");
const incrementButton: HTMLButtonElement | null = document.getElementById(
  "increment"
) as HTMLButtonElement | null;
const decrementButton: HTMLButtonElement | null = document.getElementById(
  "decrement"
) as HTMLButtonElement | null;

let count: number = 0;

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
