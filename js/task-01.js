const itemsRef = document.querySelectorAll('.item');
const sumCategories = itemsRef.length;
const message = `В списке ${sumCategories} категории.`;

console.log(message);


const heddingText = document.querySelectorAll('h2');

for (let i = 0; i < sumCategories; i++) {
   console.log("текст заголовка элемента:   ", heddingText[i].textContent)  
   console.log("~ itemsRef.children", itemsRef[i].children);
}
   

// console.log("~ heddingText", [...heddingText[0]].textContent);
// const tegs = heddingText.children

// текст заголовка
// const text = {... heddingText};

// console.log(text);


// const listTitle = document.querySelectorAll('h2').textContent
// console.log("~ listTitle", listTitle)

// const ara = text.forEach( e => e.firstElementChild);
// const tara = text.map( e => e.firstElementChild);
// console.log("~ tara", tara)
// console.log("~ ara", ara)

const ulCategories = document.querySelector('#categories');
console.log("~ ulCategories", ulCategories.children)
