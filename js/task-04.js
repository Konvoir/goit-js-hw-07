let counterValue = 0;

const spanValue = document.querySelector('#value');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');


buttonDecrement.addEventListener('click', onButtonDecrement);
buttonIncrement.addEventListener('click', onButtonIncrement);

function onButtonDecrement () {counterValue -= 1;
  console.log("~ counterValue ", counterValue );};
  
function onButtonIncrement () {counterValue += 1
  console.log("~ counterValue ", counterValue );};



// function increment () {};
// function decrement () {};

{/* <div id="counter">
      <button type="button" data-action="decrement">-1</button>
      <span id="value">0</span>
      <button type="button" data-action="increment">+1</button>
    </div> */}