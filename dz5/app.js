function Books(books) {
  const booksWith = books.filter((book) => book.toLowerCase().includes('у'));

  const booksWithout = books.filter((book) => !book.toLowerCase().includes('у'));

  const booksWithUText = booksWith.map((book) => book + ' - книга с буквой «у»');

  console.log("C буквой у:");
  booksWithUText.forEach((book) => console.log(book));

  console.log("Остальные:");
  booksWithout.forEach((book) => console.log(book));
}


let counterElement = document.getElementById('counter');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
    let currentValue = parseInt(counterElement.value, 10)
    counterElement.value = currentValue + 1
})

minusButton.addEventListener('click', () => {
    let currentValue = parseInt(counterElement.value, 10)
    counterElement.value = currentValue - 1
})