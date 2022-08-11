let submit = document.querySelector('.submitbutton');
let wrapper = document.querySelector('.gnrl-wrapper');
let output = document.querySelector('.output');

wrapper.addEventListener("submit", function(e) {
    e.preventDefault();
    const number1 = parseFloat(document.querySelector('#number1').value);
    const number2 = parseFloat(document.querySelector('#number2').value);

    function getRandomNumber (min, max) {
        min = Math.ceil(number1);
        max = Math.floor(number2);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (number1 >= number2) {
        output.innerHTML = "";
        output.insertAdjacentHTML("beforeend", "The first number has to be lower then the second one.");
    } else {
        output.innerHTML = "";
        output.insertAdjacentHTML("beforeend", `Your number: ${getRandomNumber()}`);
    }
})