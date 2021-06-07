const sumCategories = document.querySelectorAll('.item').length;
const message = `В списке ${sumCategories} категории.`;

console.log(message);


const heddingText = document.querySelectorAll('.item');
// const tegs = heddingText.children

// текст заголовка
const text = {... heddingText};

console.log(text);


const ara = text.forEach( e => e.firstElementChild);
// const ara = text.map( e => e.firstElementChild);
console.log("~ ara", ara)