const refs = {
    input: document.querySelector('input'),
    // inputValue:  document.querySelector('#validation-input')
};
const totalLength = refs.input.getAttribute('data-length');

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur (evt) {
    const val = (evt.target.value);
  if (val.length >= totalLength) { valid()
} else {inValid() };
};

    function valid (){
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
    };


    function inValid (){
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
        };

