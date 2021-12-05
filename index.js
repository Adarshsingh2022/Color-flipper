var button = document.querySelector("button");

button.addEventListener("click", function() {
    const changeColor = document.body.style.backgroundColor;

    document.body.style.backgroundColor = changeColor === 'red' ? 'blue' : 'red';

});