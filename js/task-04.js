let counterValue= document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

let spanValue = Number(counterValue.textContent);
console.log("~ spanValue", spanValue)

buttonDecrement.addEventListener('click', onButtonDecrement);
buttonIncrement.addEventListener('click', onButtonIncrement);

function onButtonDecrement () {spanValue -= 1;
  counterValue.innerText = spanValue
  console.log("~ counterValue ", counterValue );};
  
function onButtonIncrement () {spanValue += 1
  counterValue.innerText = spanValue;
  console.log("~ counterValue ", counterValue );};



// function increment () {};
// function decrement () {};

{/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */}