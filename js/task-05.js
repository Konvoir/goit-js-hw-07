const refs = {
input: document.querySelector('#name-input'),
output: document.querySelector('#name-output')};
// if (inputEl.value) {outputEl.value = inputEl.value};

refs.input.oninput = function () {
    if (refs.input.value === '') {
        refs.output.innerHTML = 'незнакомец';
    } else {
        refs.output.innerHTML = refs.input.value;
    }
  }





// refs.input.addEventListener('input', onInputChange);

// function onInputChange () {
//     // refs.output.textContent = evt.currentTarget.value

//     if (refs.input.value = '') {refs.output.innerHTML = 'незнакомец'}
//     else { refs.output.innerHTML = refs.input.value;};
//     console.log("~ refs.input.value", refs.input.value)
// };
// // if (!evt.currentTarget.length) {refs.output.textContent = 'незнакомец'};






{/*Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
input), подставляет его текущее значение в `span#name-output`. Если инпут
пустой, в спане должна отображаться строка `'незнакомец'`.

```html
<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
    
    <input type="text" placeholder="Ваше имя?" id="name-input" />
    <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}