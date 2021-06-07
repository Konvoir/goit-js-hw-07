const refs = {
    input: document.querySelector('#validation-input')
};
console.log("~ refs", refs);


refs.input.addEventListener('blur', onInputBlur);

function onInputBlur () {
    refs.input.classList.add('invalid')
    if () {refs.input.classList.remove('invalid');
        refs.input.classList.add('valid')} ;
};